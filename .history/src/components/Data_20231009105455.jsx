
  useEffect(() =>{
    getData()
  },[])


  return (
    <MyContext.Provider value={{fotos, setFotos}}>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </BrowserRouter>
    </MyContext.Provider>
  )
}

export default Data
