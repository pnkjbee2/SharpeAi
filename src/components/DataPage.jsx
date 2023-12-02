import React, { useEffect, useState } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper, Container } from '@mui/material'
import PieComp from './PieComp' 

function DataPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        filterPostsByUserId(data, 1);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filterPostsByUserId = (data, userId) => {
    const filteredData = data.filter(post => post.userId === userId);
    setFilteredPosts(filteredData);
  };

  return (
    <div style={{display:'flex', justifyContent: 'flex-start'}}>
    <Container maxWidth="md">
      <h1>Data Page</h1>
      <br />
      <Paper elevation={3} style={{ marginBottom: '20px', overflow: 'hidden', borderRadius: '8px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPosts.map(post => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
              {/* <PieComp data1={filteredPosts.length} data2={posts.length} /> */}
    </Container>
     <PieComp data1={filteredPosts.length} data2={posts.length} />
     </div>
  );
}

export default DataPage;
