// import firebase from 'firebase/app';
// import { NextComponentType, NextPageContext } from 'next';
// import { useRouter } from 'next/dist/client/router';
// import React, { useEffect } from 'react';

// import { useAuthState } from 'react-firebase-hooks/auth';

// const WaitingComponent = (props: { displayText: string }) => (
//   <div
//     style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh',
//       flexDirection: 'column',
//     }}
//   >
//     <Spinner animation="border" />
//     <p style={{ marginTop: 5 }}>{props.displayText}</p>
//   </div>
// );

// export const ProtectedRoute = (props: {
//   Component: NextComponentType<NextPageContext, any, {}>;
//   pageProps: any;
// }) => {
//   const { Component, pageProps } = props;

//   const [user, loading, error] = useAuthState(firebase.auth());
//   const router = useRouter();

//   useEffect(() => {
//     if (!user && !loading)
//       router.push({
//         pathname: '/auth/sign-in',
//       });
//   }, [user, loading]);

//   if (loading)
//     return <WaitingComponent displayText="Đang khởi tạo người dùng..." />;
//   if (user) return <Component {...pageProps} />;
//   if (error) return <WaitingComponent displayText="Có lỗi xảy ra!" />;
//   return <WaitingComponent displayText="Đang chuyển hướng..." />;
// };
import React from 'react';

const index = () => {
  return <div>hi</div>;
};

export default index;
