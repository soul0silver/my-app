
import { useFormik } from "formik"

import * as Yup from "yup";
import './Register.css';
const Reg = () => {


          const formik = useFormik({
                    initialValues: {
                              LastName: '',
                              FirstName: '',
                              birthday: '',
                              phone: '',
                              email: '',
                              pass: '',
                              repass: ''
                    },
                    validationSchema: Yup.object({
                              LastName: Yup.string().required("required").min(2, "Enter at least 2 characters a-z"),
                              FirstName: Yup.string().required("required").min(2, "Enter at least 2 characters a-z"),
                              email: Yup.string().required("required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "invalid email"),
                              birthday: Yup.string().required("required"),
                              pass: Yup.string().required("required").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/, "Password must be at least 8 characters including uppercase, lowercase letters, numbers and special characters"),
                              repass: Yup.string().required("required").oneOf([Yup.ref('pass'), null], 'Password incorrect'),
                              phone: Yup.string().required("required").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/, "Invalid phone number")
                    }),
                    onSubmit: (values) => { console.log(values) }
          });

          return (
                    <form action="" onSubmit={formik.handleSubmit}>
                              <h1 style={{ textAlign: 'center' }}>CREATE NEW ACCOUNT</h1>

                              <p style={{ textAlign: 'center' }}>Create an account for access to your address book, express checkout, order history, rewards, and gift reminders.</p>

                              <div className="detail">
                                        <div className="detail-item">
                                                  <label htmlFor="email">E-MAIL ADDRESS</label>
                                                  <input className={(!formik.errors.email && formik.values.email !== '') ? 'valid' : 'invalid'} type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} required />
                                                  {formik.errors.email && (
                                                            <p>{formik.errors.email}</p>
                                                  )}
                                        </div>
                                        <div className="detail-item">
                                                  <label htmlFor="pass">PASSWORD</label>
                                                  <input className={(!formik.errors.pass && formik.values.pass !== '') ? 'valid' : 'invalid'} type="password" name="pass" id="pass" value={formik.values.pass} onChange={formik.handleChange} />
                                                  {formik.errors.pass && (
                                                            <p>{formik.errors.pass}</p>
                                                  )}
                                        </div>
                                        <div className="detail-item">
                                                  <label htmlFor="repass">CONFIRM NEW PASSWORD</label>
                                                  <input className={(!formik.errors.repass && formik.values.repass !== '') ? 'valid' : 'invalid'} type="password" name="repass" id="repass" value={formik.values.repass} onChange={formik.handleChange} />
                                                  {formik.errors.repass && (
                                                            <p>{formik.errors.repass}</p>
                                                  )}
                                        </div>
                                        <div className="detail-item">
                                                  <label htmlFor="LastName">LAST NAME</label>
                                                  <input className={(!formik.errors.LastName && formik.values.LastName !== '') ? 'valid' : 'invalid'} type="text" name="LastName" id="LastName" value={formik.values.LastName} onChange={formik.handleChange} required />

                                                  {formik.errors.LastName && (
                                                            <p>{formik.errors.LastName}</p>
                                                  )}

                                        </div>
                                        <div className="detail-item">
                                                  <label htmlFor="FirstName">FIRST NAME</label>
                                                  <input type="text" className={(!formik.errors.FirstName && formik.values.FirstName !== '') ? 'valid' : 'invalid'} name="FirstName" id="FirstName" value={formik.values.FirstName} onChange={formik.handleChange} required />
                                                  {formik.errors.FirstName && (
                                                            <p>{formik.errors.FirstName}</p>
                                                  )}

                                        </div>

                                        <div className="detail-item">
                                                  <label htmlFor="phone">PHONE NUMBER</label>
                                                  <input className={(!formik.errors.phone && formik.values.phone !== '') ? 'valid' : 'invalid'} type="tel" name="phone" id="phone" value={formik.values.phone} onChange={formik.handleChange} />
                                                  {formik.errors.phone && (
                                                            <p>{formik.errors.phone}</p>
                                                  )}
                                        </div>
                                        <div className="detail-item">
                                                  <label htmlFor="birthday">BIRTHDAY</label>
                                                  <input className={(!formik.errors.birthday && formik.values.birthday !== '') ? 'valid' : 'invalid'} type="date" name="birthday" id="birthday" value={formik.values.birthday} onChange={formik.handleChange} />
                                                  {formik.errors.birthday && (
                                                            <p>{formik.errors.birthday}</p>
                                                  )}
                                        </div>
                                        <br />


                              </div>
                              <div style={{alignItems:'center',display:'flex',flexDirection:'column'}}><button style={{width:'210px', height: '33px' }} type="submit">CREATE A NEW ACCOUNT</button></div>

                    </form>
          );
};
export default Reg