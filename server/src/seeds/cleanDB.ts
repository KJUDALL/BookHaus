import { User } from '../models/index.js';

const cleanDB = async (): Promise<void> => {
    try {
        await User.deleteMany({});
        console.log('Profile collection cleaned.');
    } catch (err) {
        console.error('Error cleaning up collections:', err);
        process.exit(1);
    }
};

export { cleanDB };