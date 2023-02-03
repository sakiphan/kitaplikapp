export default function (errorCode) {
    switch (errorCode) {
        case 'auth/invalid-email':
            return 'The email address is badly formatted.'
        case 'auth/email-already-exists':
            return 'The email is already exist'

        default:
            break;
    }
}