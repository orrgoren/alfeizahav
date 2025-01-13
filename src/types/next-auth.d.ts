declare module 'next-auth' {
  interface Session {
    user: {
      sub: string;
    };
  }
}
