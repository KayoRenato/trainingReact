import Title from "../../components/Title";

export default function useTitle() {
    return (
        <>
            <Title
                title='First Title'
                subtitle='Second Title'
                body='Body Text'
            />
            <br />
            <Title
                title='Login'
                subtitle='Enter with your email'
                body='Forgot password?'
                small //or small={true}
            />
            <br />
            <Title
                title='Login'
                subtitle='Enter with your email'
                body='Forgot password?'
                small={false} // or not set props
            />
        </>
    );
}