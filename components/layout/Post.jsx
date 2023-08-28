// import {
//   Box,
//   Image,
//   Flex,
//   useColorModeValue,
//   useDisclosure,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   Text,
//   Button,
//   Stack,
//   Textarea,
//   Input
// } from '@chakra-ui/react'
// import { useRef } from 'react'
// import { PlusSquareIcon } from '@chakra-ui/icons'
// import { useState } from 'react'
// import { useSession } from 'next-auth/react'
// import { useRouter } from 'next/router'
// import {
//   addDoc,
//   serverTimestamp,
//   doc,
//   updateDoc,
//   collection
// } from 'firebase/firestore'
// import { db, storage } from '../../firebase'
// import { ref, getDownloadURL, uploadString } from 'firebase/storage'

// export const PostingExperience = ({ username }) => {
//   const { data: session } = useSession()
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const [selecFile, setSelecFile] = useState(null)
//   const filePcikerRef = useRef(null)
//   const captionRef = useRef(null)
//   const titleRef = useRef(null)
//   const finalRef = useRef(null)
//   const [loading, setLoading] = useState(false)
//   const router = useRouter()

//   const uploadPost = async () => {
//     if (!session) {
//       return router.push('/auth/signin')
//     }
//     if (loading) return

//     setLoading(true)

//     const decRef = await addDoc(collection(db, 'posts'), {
//       username: session.user.username,
//       title: titleRef.current.value,
//       des: captionRef.current.value,
//       profile: session.user.image,
//       timestamp: serverTimestamp()
//     })

//     console.log('New doc add with Id', decRef.id)

//     const imageRef = ref(storage, `posts/${decRef.id}/image`)

//     await uploadString(imageRef, selecFile, 'data_url').then(async snapshot => {
//       const downloadURL = await getDownloadURL(imageRef)
//       await updateDoc(doc(db, 'posts', decRef.id), {
//         image: downloadURL
//       })
//     })
//     onClose(true)
//     setLoading(false)
//     setSelecFile(null)
//   }

//   const addImageToPost = e => {
//     // e.preventDefault();
//     const render = new FileReader()
//     if (e.target.files[0]) {
//       render.readAsDataURL(e.target.files[0])
//     }
//     render.onload = readerEvent => {
//       setSelecFile(readerEvent.target.result)
//     }
//   }
//   return (
//     <>
//       <Box pl={'2rem'} py="2rem">
//         <Button onClick={onOpen}>
//           <PlusSquareIcon />
//         </Button>
//       </Box>
//       <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(4px) " />
//         <ModalContent
//           maxW="46rem"
//           h={{ base: '90vh', md: 'auto' }}
//           overflow="hidden"
//           alignItems={'center'}
//           justifyContent={'center'}
//         >
//           <Box w="full">
//             <Flex flexDirection={'row'} justifyContent="space-between">
//               <Box bg="black" w="full">
//                 {selecFile ? (
//                   <Image
//                     src={selecFile}
//                     h="25rem"
//                     objectFit={'contain'}
//                     onClick={() => setSelecFile(null)}
//                   />
//                 ) : (
//                   <Image
//                     onClick={() => filePcikerRef.current.click()}
//                     src="https://cdn.dribbble.com/users/844846/screenshots/6593834/icon-animation-1.gif"
//                     h="auto"
//                     objectFit={'contain'}
//                   />
//                 )}
//               </Box>
//               <Box
//                 bg={useColorModeValue('#f9f7f1', '#181825')}
//                 w="full"
//                 color={'white'}
//                 px="10px"
//               >
//                 <Text textAlign={'center'} py="1rem" fontWeight={'bold'}>
//                   Upload a photo
//                 </Text>
//                 <Stack spacing={'1rem'} pt="-1rem">
//                   <input
//                     type="file"
//                     hidden
//                     ref={filePcikerRef}
//                     onChange={addImageToPost}
//                     accept="image/png, image/gif, image/jpeg"
//                   />
//                   <Input ref={titleRef} placeholder="Title" />
//                   <Textarea
//                     type="text"
//                     ref={captionRef}
//                     placeholder="Please enter a caption..."
//                   />
//                   <Button disabled={!selecFile} onClick={uploadPost}>
//                     {loading ? 'Uploading...' : 'Upload'}
//                   </Button>
//                 </Stack>
//               </Box>
//             </Flex>
//           </Box>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }
