
import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import {IPostReq} from '../types/IPostReq'
import { useDispatch, useSelector } from "react-redux";
import {addProvince} from "../store/actions/provinceActions";
import {AppState} from "../store";
import {toast} from "react-toastify";
import success = toast.success;
import {useNavigate} from "react-router-dom";


function Addcountry() {
    const navigate = useNavigate();

    const [validated, setValidated] = useState(false);
    const [upcat, setUpcat] = useState<IPostReq>({
        provinceName: "",
        townName:"",
        population:0,
    });
    const dispatch = useDispatch();
    const { data, loading, error,success } = useSelector(
        (state: AppState) => state.province
    );

    useEffect(() => {
        console.log(error,success)
        if (error != ""){
            toast.warn(error)
        }
        if (success != ""){
            toast.success(success)
        }

    }, [dispatch,error,success]);

    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(upcat)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            console.log(upcat)
            event.preventDefault();
            console.log(upcat)
        }

        // @ts-ignore
        dispatch(addProvince(upcat,succes));
        setValidated(true);
    };

    const succes=()=>{
        navigate("/list")
    }

    console.log(error,success)
  // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
      <div>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Row className="mb-4">
                  <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                          required
                          type="text"
                          placeholder="İl yazınız..."
                          value={upcat.provinceName}
                          onChange={(evt) => setUpcat({...upcat,provinceName:evt.target.value})}
                      />
                      <Form.Control.Feedback type="invalid">
                          Lütfen il giriniz...
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                          required
                          type="text"
                          placeholder="İlçe yazınız..."
                          value={upcat.townName}
                          onChange={(evt) => setUpcat({...upcat,townName:evt.target.value})}
                      />
                      <Form.Control.Feedback type="invalid">
                          Lütfen ilçe giriniz...
                      </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom02">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                          required
                          type="number"
                          placeholder="İlçe yazınız..."
                          value={upcat.population}
                          onChange={(evt) => setUpcat({...upcat,population:evt.target.value})}
                      />
                      <Form.Control.Feedback type="invalid">
                          Lütfen ilçe giriniz...
                      </Form.Control.Feedback>
                  </Form.Group>
              </Row>
              <Button type="submit">Gönder</Button>
          </Form>
      </div>
  )
}

export default Addcountry