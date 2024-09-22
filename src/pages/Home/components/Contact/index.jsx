import React, { useState } from 'react';
import "./style.scss";
import { Input, message as AntdMessage } from 'antd';
import { JackInTheBox } from 'react-awesome-reveal';
import AnimatedButton from '../../../../components/animatedButton';
const { TextArea } = Input;
import emailjs from '@emailjs/browser';




const ContactMe = (props) => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [contactFormState, setContactformState] = useState({ isLoading: false, isSuccess: false })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setContactformState(prev => ({ ...prev, isLoading: true }));

        const newErrors = {};

        if (!form.name) {
            newErrors.name = 'Please enter your name.';
        }

        if (!form.email || !validateEmail(form.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        if (Object.keys(newErrors).length > 0) {

            setContactformState(prev => ({ ...prev, isLoading: false }));
            setErrors(newErrors);
            AntdMessage.error('Please correct the errors in the form.');
        } else {
            setErrors({});

            // Prepare the JSON string
            const jsonString = JSON.stringify(form);

            emailjs
                .send(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form, {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                })
                .then(
                    (res) => {
                        props?.setIsTriggerConfettie(true);
                        setContactformState(prev => ({ ...prev, isLoading: false }));
                        AntdMessage.success('Form submitted successfully!');
                        setForm({ name: '', email: '', message: '' })
                    },

                ).catch((error) => {
                    setContactformState(prev => ({ ...prev, isLoading: false }));
                    AntdMessage.error("Form submission Failed!");
                });



        }
    };

    return (
        <section className='v_contact_me_container v_container v_padding_vertical v_padding_horizontal' id='v_contact'>
            <JackInTheBox fraction={.3}>
                <h2 className='xl:text-9xl sm:text-8xl mb-[20px] text-white font-extrabold text-center font-inter'>
                    GET <span className='font-inter text-stroke-3 text-nowrap'>IN TOUCH</span>
                </h2>
            </JackInTheBox>

            {/* contact form */}
            <form onSubmit={handleSubmit}>
                <div className='mb-[20px] sm:mb-[30px]'>
                    <label className='mb-[4px] text-[#DCD8D9]'>
                        Name <span className='text-[#FE0707]'>*</span>
                    </label>
                    <Input
                        onChange={handleChange}
                        size="large"
                        placeholder="Name"
                        value={form.name}
                        name='name'
                        status={errors.name && 'error'}
                    />
                    {errors.name && <div className='text-[#FE0707]'>{errors.name}</div>}
                </div>

                <div className='mb-[20px] sm:mb-[30px]'>
                    <label className='mb-[4px] text-[#DCD8D9]'>
                        Email <span className='text-[#FE0707]'>*</span>
                    </label>
                    <Input
                        onChange={handleChange}
                        size="large"
                        placeholder="Email"
                        value={form.email}
                        name='email'
                        status={errors.email && 'error'}
                    />
                    {errors.email && <div className='text-[#FE0707]'>{errors.email}</div>}
                </div>

                <div className='mb-[20px] sm:mb-[30px]'>
                    <label className='mb-[4px] text-[#DCD8D9]'>
                        Message (optional)
                    </label>
                    <TextArea
                        onChange={handleChange}
                        name='message'
                        size="large"
                        placeholder="Message"
                        value={form.message}
                        style={{ height: 120, resize: 'none' }}
                    />
                </div>

                <div className='flex justify-center'>
                    <AnimatedButton type="submit" className="my-[20px]" isLoading={contactFormState?.isLoading} />
                </div>
            </form>
        </section>
    );
};

export default ContactMe;
