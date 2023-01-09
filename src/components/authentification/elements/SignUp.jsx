import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Button,
    Title,
    Text,
    Anchor, Group,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    wrapper: {
        textAlign: 'left',
        minHeight: 900,
        backgroundSize: 'cover',
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },

    form: {
        borderRight: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        }`,
        minHeight: 900,
        maxWidth: 450,
        paddingTop: 80,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '100%',
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export function SignUp() {
    const { classes } = useStyles();
    return (
        <div className={classes.wrapper} >
            <Paper className={classes.form} radius={0} p={30} >
                <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
                    Create an account here at Bookly!
                </Title>

                <Group noWrap>
                    <TextInput autoFocus label="First name" placeholder="John" size="md" />
                    <TextInput label="Last name" placeholder="Smith" size="md" />
                </Group>
                <TextInput label="Username" placeholder="john_smith" mt="md" size="md" />
                <TextInput label="Email address" placeholder="hello@gmail.com" mt="md" size="md" />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
                <PasswordInput label="Repeat password" placeholder="Repeat your password" mt="md" size="md" />
                {/*<Checkbox label="Keep me logged in" mt="xl" size="md" />*/}
                <Button fullWidth mt="xl" size="md">
                    Register
                </Button>

                <Text align="center" mt="md">
                    Already have an account?{' '}
                    <Anchor href="/login" weight={700} >
                        Log In
                    </Anchor>
                </Text>
            </Paper>
        </div>
    );
}