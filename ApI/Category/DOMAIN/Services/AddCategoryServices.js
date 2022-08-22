const { CaseAddCategory } = require("../Cases/CaseAddCategory");
const { CaseDeleteCategory } = require("../Cases/CaseDeleteCategory");
const { CaseGetAllCateogries } = require("../Cases/CaseGetAllCategories");
const { CaseGetAllItemsCateogries } = require("../Cases/CaseGetAllItemsCategory");

const AddCategoryServices=async(catName)=>{
    result = CaseAddCategory(catName)
    return result;
}

const DeleteCategoryServices= async(id)=>{
result = await CaseDeleteCategory(id)
return result;
}
const GetAllCategoriesServices= async()=>{
    result = await CaseGetAllCateogries()
    return result;
    }

    const GettAllItemsCategoryServices=async(id)=>{
        result  = await CaseGetAllItemsCateogries(id)
        return result;
    }
module.exports={GettAllItemsCategoryServices,AddCategoryServices,GetAllCategoriesServices,DeleteCategoryServices}