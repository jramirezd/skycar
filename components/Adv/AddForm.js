import React, { useEffect, useState  } from 'react';
import { useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router';
import Button from '../Button';
import { addCar } from '../../services/db';
import uploadFile from '../../services/storage';
import useGetAdv from '../../logic/useGetAdv';
import FormInput from '../FormInput';
import FormSelect from '../FormInput/FormSelect';
import FormTextarea from '../FormInput/FormTextarea';

function getModels(brandName, brands) {
  const selectedBrand = brands.filter((brand) => brand.name === brandName)[0];
  return selectedBrand && selectedBrand.models ? selectedBrand.models : [];
};

const AddForm = () => {
    const router = useRouter();
    const { id } = router.query;
    const user = useGetAdv('users', id);  
    const [error, setError] = useState('');
    const brands = useSelector(state => state.userBrand.brands);
    const categories = useSelector(state => state.userCat.categories);
    const [fileUploadPercent, setFileUploadPercent] = useState('');
    const [modelsOptions, setModelsOptions] = useState([]);
  
    const provincia = user[0].provincia
    const [formData, setFormData] = useState({
        setBrand: 'Audi',
        setModel:'A3',
        destacado:'',
        price: '',
        tags:'',
        kms: '',
        year:'',
        category:'Hatchback',
        longtext:'',
    });
    
    useEffect(() => {
      const models= getModels(formData.setBrand, brands);
      setModelsOptions(models);
    }, [formData.setBrand, brands])
     

  const handleUploadImage = async (event) => {
    const file = event.target.files[0];
    const downloadURL = await uploadFile(file, setFileUploadPercent);
    if (downloadURL){
      setFormData({...formData, photo: downloadURL});
    } else {
      setError('No se ha subido la imagen');
    }
  };

 
 const onSubmit = (event) => {
    event.preventDefault();
    const {setBrand, setModel, destacado, category, price, tags, kms, year, photo, longtext } = formData;
    if (!formData.price || !formData.kms || !formData.year) {
      setError('Todos los campos son obligatorios');
    } else{
        addCar(id, setBrand, setModel, destacado, category, price, tags, kms, year, photo, longtext, provincia).then(() => {
        Router.push('/carok');
     })
    }
    
  
  }
  
  return (
    <section className="add-car-form">
    <div className="brands">
    {error && <p>{error}</p>}
    <form onSubmit={onSubmit}>
  
        <FormSelect 
          label="Marca" 
          value={formData.setBrand} 
          options={brands.map(moment => moment.name)}
          onChange={value => setFormData({ ...formData, setBrand: value })} 
        />
        <FormSelect 
          label="Modelo" 
          options={modelsOptions}
          value={formData.setModel} 
          onChange={value => setFormData({ ...formData, setModel: value })} 
        />
    
        <FormInput 
          label="Año" 
          value={formData.year} 
          onChange={value => setFormData({ ...formData, year: value })} 
        />
        <FormInput 
          label="Kilometros" 
          value={formData.kms} 
          onChange={value => setFormData({ ...formData, kms: value })} 
        />
         <FormSelect 
          label="Tipo de coche" 
          value={formData.category} 
          options={categories.map(moment => moment.name)}
          onChange={value => setFormData({ ...formData, category: value })} 
        />
       <FormInput 
          label="Precio" 
          value={formData.price} 
          onChange={value => setFormData({ ...formData, price: value })} 
        />
        <FormInput 
          label="Tag" 
          value={formData.tags} 
          onChange={value => setFormData({ ...formData, tags: value })} 
        />
         <FormInput 
          label="Texto destacado" 
          value={formData.destacado} 
          onChange={value => setFormData({ ...formData, destacado: value })} 
        />   
        <FormTextarea 
          label="Descripción" 
          value={formData.longtext} 
          onChange={value => setFormData({ ...formData, longtext: value })} 
        />
        <fieldset>
          <label>Foto</label>
        <input type="file" onChange={handleUploadImage} />
        </fieldset>
        <fieldset>
        <Button type="submit">
          Publicar
        </Button>
        </fieldset>

        
      </form>
    
    </div>
  </section>
  );
}
export default AddForm;