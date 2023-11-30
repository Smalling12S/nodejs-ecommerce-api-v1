// exports.getProducts = asyncHandler(async (req, res) => {

    //   const queryStringObj = {...req.query};
    //   const excludesFields = ['page','sort','limit','fields'];
    //   excludesFields.forEach((field)=> delete queryStringObj[field]);
    
    // // > and < a,d >= and =<
    //   let queryStr = JSON.stringify(queryStringObj);
    //   queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
      // console.log(JSON.parse(queryStr));
      // console.log(queryStringObj);
    
      // const page = req.query.page * 1 || 1;
      // const limit = req.query.limit * 1 || 50;
      // const skip = (page - 1) * limit;      
      
    //   //bulid query
    //  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    //   .filter()
    //   .sort()
    //   .limitFields()
    //   .search('Products') // Assuming 'Products' as the modelName
    //   .paginate();
    
    // // Execute Query
    // const { mongooseQuery, paginationResult } = apiFeatures;  
    // const products = await mongooseQuery;
    
    // // Respond with results and pagination information if needed
    // res.status(200).json({ results: products.length,paginationResult, data: products });
    
    
    
      //Sorting 
      // if(req.query.sort){
      //   const sortBy = req.query.sort.split(',').join(' ');
      //   console.log(sortBy)
      //   mongoseQuery = mongoseQuery.sort(sortBy);
      // }else{
      //   mongoseQuery = mongoseQuery.sort('-createAt');
      // }
    
    
      // Field Limiting
      // if(req.query.fields){
      //   const fields = req.query.fields.split(',').join('   ');
      //   mongoseQuery = mongoseQuery.select(fields);
      // }else{
      //   mongoseQuery = mongoseQuery.select('-__v'); 
      // }
    
    
    
      //Search  
      // if(req.query.keyword){
      //   const query = {};
      //   query.$or = [
      //     {title : {$regex : req.query.keyword, $options: 'i' }},
      //     {description : {$regex : req.query.keyword, $options: 'i' }},
      //   ];
      //   mongoseQuery = mongoseQuery.find(query); 
      // }
    
      
    // });