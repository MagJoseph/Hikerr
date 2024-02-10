import React from 'react'
import PostItem from './PostItem'
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import Client from "../services/api";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { LinearProgress } from '@mui/material';

import { styled } from "@mui/material/styles";
import { data } from '@here/maps-api-for-javascript';

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#143d21",
  },
});

function nameComp(a, b) {
  const name1 = getTitleName(a)
  const name2 = getTitleName(b)

  if (name1 < name2) {
    return -1
  } else if (name1 > name2) {
    return 1
  } else {
    return 0;
  }
}


function getTitleName(obj) {
  return obj.title?.toLowerCase()
}


const Posts = () => {

//set posts state
  const [posts, setPosts] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const [hiddenCount, setHiddenCount] = useState(0)
  const [searchText, setSearchText] = useState('')
  const [sortBy, setSortBy ] = useState('')

let navigate = useNavigate();

//after clicking on post it will go to PostDetails
const showPost = (posts) => {
   navigate(`/posts/postdetail/${posts.id}`)
 } 
  
const getPosts = async () => {
  const list = await Client.get(`posts`);
  console.log(list.data);
  setPosts(list.data);
}; 
  
useEffect(() => {
  getPosts();
}, []);  
  
    useEffect(() => {
    const filtered = getPostsData()
    setFilteredData([...filtered])
    setHiddenCount(posts.length - filteredData.length)
    }, [posts, searchText, sortBy])
  
  const hasFilter = () => {
    return sortBy !== '' || searchText !== ''
  }
  
  const getPostsData = () => {
    const results = hasFilter() ? [] : posts;
    if (hasFilter()) {
      posts.forEach(o => {
        
        const titleName = o.title.toLowerCase()

        let hasNameMatch = false

        if (searchText !== '') {
          if (titleName.indexOf(searchText.toLowerCase()) != -1) {
            hasNameMatch = true
          }
        }

        if (hasNameMatch) {
          results.push(o)
        }
      })
      
    }
    switch (sortBy) {
      case 'name': 
        return results.sort(nameComp)
      // case 'rating':
      //   results.sort(ratingComp)
        break
      default:
        return results
    }
  }

  const handleSortBy = (e) => {
    setSortBy(e.target.value)
  }

  const clearText = () => {
    if (searchText) {
      return {
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <CloseIcon onClick={() => setSearchText('')} style={{ cursor: 'pointer'}} />
          </InputAdornment>
        )
      }
    }
    return {
      endAdornment: (
        <InputAdornment position="end">
          <SearchIcon />
        </InputAdornment>
      )
    }
  }

   const filteredPosts = sortBy === " " ? posts : posts?.sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "none") {
      setSortBy('')
    }
  });
  
  return (
    <div>
      <Container sx={{ py: 3 }} maxWidth="md">
        <div className="filter-container">
            <TextField
              label="Find By Name"
              variant="standard"
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              style={{ width: 180 }}
              InputProps={clearText()}
            />
           
            <FormControl>
              <InputLabel id="simple-select-sort-by">
                Sort By
              </InputLabel>
              <Select
                id="sort"
                variant="standard"
                style={{ width: 180 }}
                value={sortBy}
                onChange={handleSortBy}
              >
                <MenuItem value="rating">Rating</MenuItem> 
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="none">None</MenuItem>
             </Select>
            </FormControl>
       </div>
       <br/>
        {(hasFilter() && hiddenCount) ? (
          <Grid container spacing={4}>
            {filteredData?.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "96.25%",
                    }}
                    image={post.imgUrl}
                  />
                  <div className="centered">
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{post.title}</Typography>
                      <StyledRating
                        name="simple-controlled"
                        readOnly
                        value={post.rating}
                      />
                    </CardContent>

                    <Button
                      className="hov"
                      size="small"
                      onClick={() => showPost(post)}
                      style={{ color: "#143d21", width: "100px" }}
                    >
                      View
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={4}>
            {filteredPosts?.map((post) => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      pt: "96.25%",
                    }}
                    image={post.imgUrl}
                  />
                  <div className="centered">
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6">{post.title}</Typography>
                      <StyledRating
                        name="simple-controlled"
                        readOnly
                        value={post.rating}
                      />
                    </CardContent>

                    <Button
                      className="hov"
                      size="small"
                      onClick={() => showPost(post)}
                      style={{ color: "#143d21", width: "100px" }}
                    >
                      View
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

   {
     /* <StyledRating
                    name="simple-controlled"
                    readOnly
                    value={post.rating}
                  />
               */
   }
   {
     /* <PostItem
                title={post.title}
                className="img"
                image={post.imgUrl}
                content={post.content}
                rating={post.rating}
                mapImg={post.mapImg}
                userId={post.user_id}
                  /> */
   }

export default Posts