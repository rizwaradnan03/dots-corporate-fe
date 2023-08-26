import React, {useState} from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    kodeKantor: yup.string().required('Kode Kantor Wajib Di isi'),
    userName: yup.string().required('Username Wajib Di isi'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password Wajib Di isi'),
});

const LoginScreen = ({ onLogin, navigation }) => {
    const [showPassword, setShowPassword] =  useState(false);
    const handleLogin = (values) => {
        if (values.kodeKantor === 'corporate' && values.userName === 'rayya' && values.password === '123456') {
            onLogin();
            navigation.navigate('Home');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Selamat Datang</Text>
            <Text style={styles.company}>dots Corporate Mobile</Text>
            <Formik
                initialValues={{ kodeKantor: '', userName: '', password: '' }}
                onSubmit={handleLogin}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, values, errors }) => (
                    <>
                        <TextInput
                            style={styles.input}
                            mode='outlined'
                            label="Kode Kantor"
                            onChangeText={handleChange('kodeKantor')}
                            value={values.kodeKantor}
                        />
                        {errors.kodeKantor && <Text style={styles.errorText}>{errors.kodeKantor}</Text>}

                        <TextInput
                            style={styles.input}
                            mode='outlined'
                            label="Username"
                            onChangeText={handleChange('userName')}
                            value={values.userName}
                        />
                        {errors.userName && <Text style={styles.errorText}>{errors.userName}</Text>}

                        <TextInput
                            style={styles.input}
                            label="Password"
                            mode="outlined"
                            secureTextEntry={!showPassword}
                            right={<TextInput.Icon icon="eye"  name={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)} />}
                            onChangeText={handleChange('password')}
                            value={values.password}
                        />
                        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

                        <TouchableOpacity
                            style={[styles.button]}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F6F1F1',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Verdana',
        marginBottom: 10,
    },
    company: {
        fontSize: 18,
        fontFamily: 'Verdana',
        marginBottom: 50,
    },
    input: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        fontSize: 15,
        fontFamily: 'Verdana',
        borderRadius: 5,
    },
    errorText: {
        color: '#D71313',
        marginBottom: 5,
    
    },
    button: {
        backgroundColor: '#146C94',
        borderRadius: 5,
        marginTop: 5,
        width: '90%',
        height: 50,
    },
    buttonText: {
        fontSize: 23,
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Helvetica',
        color: '#F6F1F1',
        fontWeight: 'bold'
    }
});

export default LoginScreen;
