let hashes = [
  "0x052f714924d6d8572bc8db0280a73921dd8a5f6204ff2150ceba4c3245e59bd7",
  "0x052f714924d6d8572bc8db0280a73921dd8a5f6204ff2150ceba4c3245e59bd7",
  "0x052f714924d6d8572bc8db0280a73921dd8a5f6204ff2150ceba4c3245e59bd7",
  "0x0eaef05fac11d1d3bc8a1ce7c8760ec7720937a7f4975616ab039936a163cf36",
  "0x3b01c8dc66a33a83ce2912a39c2bc1c8a4d3bb6f52c84c59a8b22b7ff36a71f7",
  "0xe5c3edd7ab075c94041b1efa3ea74e190bc0843b4ea2bb4a9db31ab6aad17ea6",
  "0x599e939473ad634ec6c224a72b96b2374f1663b8a6101ff56376e34f0eb3edd9",
  "0x2b09de2042ede6d2796dd74a66413592be03f9b7d7a0d0eb67440654a894444b",
  "0xcdde0506531fb4ed35554e8f2cffbd671c30bfa94d5ac35a6ab49e0f88793b3b",
  "0x68f54910bc755d195adc9ed1130165725557f3cc2f3d4e748c457aad2d3253f2",
  "0x1e0293e60880c3089881763954bead469c4ad24b14cd19fb0512816a67569313",
  "0xdcecde5053fe1a7b32f3ac9a0e3358a8b9e984eebcfe2fde76aabd6256f4e73b",
  "0x1e15b6bf4c102abc8db4851e3431d447e1cebfa96b743beac2e6abe558fc7428",
  "0x4b030746182e87e835733cddfeabc6d3b0b1c3b5551aaf8d51b2f84051dcb47a",
  "0x0b449cf16c1b8ac804102e8edaeb010e77747bd11b8485dd9981a572e5561e2e",
  "0xb792db5daac1ce7b5247c53e6cd4293b40c1c79d5c56a27a31c2d0ebba91fdc7",
  "0x0d4286f7ad55ead78ef7420bdd185b110ad52e006cdb0868de928035ffbb8982",
  "0xf2435d67755fb07a226e775acf29f5308ec2ff430e81f57f7575d38d05aa5a67",
  "0x241162e81383c8a18c7b008df4dbfa93858769fa7bbcb245e4a8af5074808850",
  "0x8b9c8b5f8412a9a26a080b943a8374c727884f4e90947151f7d10ffdcc3812c0",
  "0x3f8dd85c1d6e8e6ee5242ea1096dbe29f55120a7b20c471d90b51c259c21e3ea",
  "0x18e382f7cc1ccac695b7d67ee6f2f951dc9123669234a861a749423d61dbecaf",
  "0x05254b949d9e59480e899897f44b59e7c528805bd2afb99b78fe0a752eca3ed6",
  "0xce64ee4672ed1f914f3a8d11c6f6c70bf965b843e0d01b6c0a93dcb0ff11de0f",
  "0x3b053ee43c0d45bd45d45118702b8ff6b866429b331e12103c1542b5d1770732",
  "0x622fb893bcecdb79390506dd09b258792508dd82be96bdfb85823352f4e5740e",
  "0x41940fc09a6c595943488ddb64016ef19a1eac457abf7a56ce8ca3be1f313f23",
  "0x56ec0d5cd9fc24b23ea736253ef0067543b82dc8866df270ebb84c323fd0bf34",
  "0x03c1f875f3f2ca75a87c89b2dc107d46a0d2903c9fceca0a1301437442911aa7",
  "0x5ab5763ae8de49c06111e114b693b3d933a16718282eddd97e7cccbaf470fe75",
  "0xe90324026d080a86d99de4b5c5ff86d1b40ab24676794a648e5ec9c74b7b60e4",
  "0xd0f77a182c596b76ac775d9fcd0bd800f9be72c020472b28b305ebe455cc08e1",
  "0xb6bdf7a2b30449a8759d9fadf1b571b181cd4c96c41158ac0922b799f33e43f6",
  "0x971bfa47852b364c1644b068cbfd58d053e3e2fd234c61a4c43f405235d0af25",
  "0xfdc187f73c33a8d0749574a8d26d0c7d0a391c71bf1495890febe50a65af0bfb",
  "0x40c6a2e769ec0126aa2847dc6e710f4fe253fbf834e8fb654bb593537a10e755",
  "0xfa1a7c80180b70e3ac37883ddb36795405968923ccf61cc2c8e1d03ce0665f96",
  "0x6ca75f96dfebe7ce98f16dd3530edc100a49b42cb62640dc6e93b4c9f4e09f1f",
  "0xc75ad06a838f26fb6e61f9a957eb518b52f3351e1c66687b9d55ba3d1c102e11",
  "0x0711d34c66e4be073b85a6363a09bab348a64b2f2cf1554306e62a641c11006d",
  "0x75ad97bff4a4fc7d8bc51c9a928bc62e7813f41f4d10a960c5fc078ff1411583",
  "0x9705f66c5fca341980be14e0a6b327361539b4f05e44a096eb1c7a24ea5286ae",
  "0x8ab2158796e5b18c5019e6e9ef82b351930b8b865d5128517d4ec2b55808b73c",
  "0xb1e9a382ef25e23af31c767fe6ef0ed12792a3a491dabfca32952c86cbbef470",
  "0xb09ca37abb1ba2575b0a1f91a16c1d83120a5f95793b7215fb54c4bb5c16f6be",
  "0x0b6c6f92eb92741139abbe0afb1256e514111f2bac4bd9c24c8d475ca8a2ced2",
  "0x07ce92bd7883695cbe3722039fe756d6fbc0b325548eb96ded3db5082a431e13",
  "0x08b49a9372f602f423a49457d5bc347ea83cbbb761582fc1f5722176807b1a8a",
  "0x53fc5914f0b9eaa5fe8b5c2335126a3bbba06cee13f3b414ae19b5a0a8ba5e28",
  "0x6b79734f851eaece2d1105ed0b21dcbcb17ca963ec7987562910c18a336cc6ab",
  "0xa2838ea21bd79f081bf4ec8a8ef77a76e56b90ef940bd2a4d5bb8a3e03575651",
  "0x7cb3c026f7a768941e3601dc02eb0516a37dddcfb097229c240e2c1d024fee3e",
  "0xb8eb039fb3c6559aabb731aa35066198a07950e6ea16b44d65315f4e0d687715",
  "0x8a8068504a72490d6a6e36cc5057b996cd1644e09b88e2911ff7ddf41e3a21ec",
  "0xef0ea11e2c4a3bc40435b6ed93285f4195f042a0abfb6611f3d01d4639da5f7c",
  "0x67c5784aceaab819a55a12df48cd0176e17a861d3f4b05541ddca91b666da736",
  "0xb61ead580165a24d672348757b752ea60d75b6415c27b14fe31084743a16a817",
  "0x96dae8b28d0f3d42ce05e4ecb3887be8988bb616bdacd0ee5e5a9bbdbe6b1d1b",
  "0xa4bd814f3495426b2b0145e4283934c8021b831f6b9a82ac1d66c67c034e4ffd",
  "0x91ef1cee19fb8e56dc2104b66bc5466aa45b80344f5c81b0dcc68f76729f9fc2",
  "0xe770a9900fac2560cefad6d97dc1fe22f472a8dd9eeda7cc1409f17f026c0567",
  "0x78c75e689491571e15bdd4156b927e94adc5adabf55bdea3009ed0e49bb8a18b",
  "0x4c747b8ac6e817ff86addf887b83d95d9c6b8efb732e658312055e836560b64e",
  "0x29cfd7028a9ef6846a07f346f8c0f500c98f48df5223b79abae2e41b591b5b7c",
  "0x95ebdb59f0b62763acec04711e4ead62e0bbd4a28b751146e6f551ec6535169f",
  "0x1c7c29ede603323cc7078fc14ff65479fd5b816959bdd70892c5cd2180a9857d",
  "0xee998f9750a2643128b8fa329062d6b1898ae614a3fba33d2491cb2e53ae9623",
  "0xc40e57353ebd925edffdbb680abf21948f113c73b5605d86425647d75a730228",
  "0x2cc6e2c64a6b7c58a6e19a9f44ef7c5ce4868d51ac0326c39f1aba5f9192796c",
  "0x747086ac6b9b3f5fbe32c6c9c02cdca34074804992dcee2500645d5662cd0305",
  "0x26c33138777f204049b616577e4981199f9197e07eb7147856b5e73a562cd93f",
  "0x47a3452ed9cc96f7fbac91c611a8cbf943c7774bf4e0d914d8988277eac20006",
  "0x088951c362a6d884db3a42b29185cc99a02e1110c69ac5f258b4f3c1f81e6dfc",
  "0x2d8aada2220eec6ad5c86dd85dbc0788bf83e4666d30e63da90bd07f7ec01a1f",
  "0x3c66e6522f1c32ae8008939ea76cc224b72a11460be6b326207eaa32e32a803d",
  "0x5a06dfc1e1628a218a899f61794ba886804b9f23aef597308065bcd98ed68604",
  "0xe81cbf37bf59708d538f1e38648d17d13033c8abb2e1f9870b4345fa5f00da65",
  "0xe1b8e7155bd3b2e148c7cb0ec6555b3d9a08069a4a6dbd4c2e6395100eee7ce5",
  "0x97fa7278edc36d1d8ce4704cc37db28de289fe07df0ee1a4c23ca642ed9e327e",
  "0x48c6743ee11201ccc53832f4f37bd2d41317e3e62b8a4e644841975f2b439ee5",
  "0x4eaab26b8d96b6cbfdfbb7b61cb6d8cb32d4ec64733f74a3043b5f72a4b54c82",
  "0x525c8dee78eb2d62266322df8cd867d5a8c4886e39247fa466007516e0e51544",
  "0x67a26167209f4bb071f4932f34880801da838b6b71b6eb659c9a8a815a8a895d",
  "0x7f425b592527d7e79ad837ea5bf7873982143eb8018fe3e9b4d942dc64dbad22",
  "0x906d464c0808ea5d510521dc981e63a550e60b7ae944a7e0357f21c3b3506101",
  "0x6bc9ed6e1f6d5f3d4ea8a3ec3ef813010425cfdf58c74105663931b8d7633fe3",
  "0xf35ff542d38cf989ba7bc66e820c318c1b680ceb07c9698c95e1c500b8096ac2",
  "0x818c4ab821a239f460b7e5cfaeaf606da0f4c243bacf8f6b8e079eceab1ee67d",
  "0x44ec11e29bdf65942497ba526e4e4664a950f1a07f061c36ab0d990a3b631def",
  "0xd7d3f0c88c2b8cffa22974580133909a77ff22a82d5abb1baee370f567b9a661",
  "0x84898ad3c84647413455f5e8baab218af820c64e0871a13734c2eea8acb25ed3",
  "0xb563339e147057e8cdb96087c5449744fe4b7654a43f4c9e4c17eb70d9f9ef89",
  "0x04450bc0bfe37eee08a765b66a7698ea4cd1d3636092433d8d857c435ddd8d63",
  "0x55d0497f1cb255bfacebdaf626a91d29b0cd239dfd5e4781b6ac4c4a6f7fc0e6",
  "0xf29e9d41527f6cecb03deac6d99ceb2479a7f8164244464d4e477c9bf74a54b7",
  "0x1f147279cef794f9cd9273cac7e2680583a9641cb9b848b2d1a2ff6c9fa453fa",
  "0xfa578e5815589e74f06c6f64f74ec4f7cfd32f20ed6a7e3518e28b08c54ae4e5",
  "0x5bcb0bd3932f7b2b181d1774a191b9fd3b30439963118978942cc1f9f079dd09",
  "0x79ca8dd2d0532714bffc31054b5cdcbfad8bc15e414dbb0405df7d4b01b2aa9e",
  "0xecdb348465987c307f409f036592fa885212259eac850fec8165e035c1f46071",
  "0xd276cb6c8e3f83aed127d1c37716edfb7f9678da18df1e2a4f1de1d9d0985786",
  "0xe53eea9a685c16b7eb385fb0e7892c766285e69e166e89549173c4d8d2987832",
  "0xd130aff8f55df6d60af3d359c48a3dfb7cd6803bd227c965e7fcb84e12943dcb",
  "0x55baafa2cea17a9d974259c2562f10aa3bb8db0aa462c0dd3ed71b943486752c",
  "0x0a1dd11b13c736fa505dc1fc75a536011f666ea34183c9050d8ce8559da704e0",
  "0xb9e19e57965f3c6343fa3b55b05085c84f7cf6655b4cb200beb5e5fdef1bcaa6",
  "0xf27bf9286a65de8e590055004a1aa87d303c9c91560c3d75ee57e9d972c502e3",
  "0x0a9ee4e97e46cd37a2d73ae75a2eb3f01e42207740dd602d3b27af293f0c7913",
  "0xc3145056eb696227f8cea53ed58c215239bfafe15efc1257b9548eae11c469e8",
  "0xe12c3e94119f5b62e0bf60b7f92001d700fcfa3136cd45c75399eaa265015b5e",
  "0x983f6f08106fd96f7a9a11be36e49ea9db40c3ed330fd2cee69444a96528a269",
  "0xf10fbe65e1672d64a24b8c07d7e2b61f901f27098a29f60e1b4b56a4bbb195a5",
  "0x9894211e2d76d4394611a7690088bab757b653dc950d2908c2b6456f348e8454",
  "0x68018eb8086dcc9797a1ac2b53bcc84bdecc5ecca551afeb1f39918c8c256692",
  "0xa6d8f8e70cbf33b50d9905a1dbf2ed760ecd4aa68925a7c0d2546ed7ac3a4815",
  "0x4f5b804300d52d19f2e4b4e67026d45f0e6834138cf48f10f0942c9f82ce65cf",
  "0xd48329ae40dadb03ceaf1a2a4377343afeca6088a8e97bdcae3f221ef13a720c",
  "0xe54ec25c66fba6b40e84b2e53a432087b59018106e9e950cf78018ade2eaa623",
  "0x52aa4c6c02203785f419cbe10ab713decc944bd56d02a3fb08becf873481c863",
  "0x852294eaef8bc966d3e9b8824c8a797f28db03ae6668897860a0c1d8eddaad08",
  "0x5bc49fc514417751569f8ab04a90fa71df86776584e17fa35f1204dbc419febf",
  "0xadc7519059d1246288e1b7e63ecda6222cfd85921723565360fc74e3b924f225",
  "0x3a1979eb69a6535760718e1962cad7838901eb92c7d62f99a4f3f991978a9b80",
  "0x72b8aae05d2f7e3f7ee35ec3350405bfcc1fa15de3122b1f57f555a46ad90643",
  "0x5ea2f18ccec8bd7d9e546177a4b9432b57d678e3766f4aabe6ef6d193be5efe9",
  "0x1623acb2767f1e1da6082dff3c0303910ba6bcf5f37b8bc6b62dbb48a6fa3d8f",
  "0x25d12e70b6df8346dc5b53e5d22cfe2d3012f53b3af96ac8ef06f3e312c0681a",
  "0x9ac922a62aa5a5bad10545294ca839122b7292e2e595ae285565366f04901c66",
  "0xdde1e03d9550ed48e4cff65e4bb49be55c27347ee0ba3f536acad7d495b7c6f3",
  "0x8fec5e3f861eca32d67d3c7124ea480cf5e25f9752a30ea72215815a7634060d",
  "0xc08fda12d3e8e302307982ee0c5bc02582aa93e9dff174d4d85c53e9ba5ff568",
  "0x68789dd8a4ccc3531f94cc9c8078e11035855e39a5139e16bca5fcd1b8550c29",
  "0x14d1a843cc3943eeca346c0a5ea1013f4375b673ce256c153970fbe9f9becc48",
  "0xf595ebaee3cacf87af64198490b2dc8e8f028964dbfabdcb5cfdd9f8af8b306f",
  "0xdecd98501958c7fe43ba9267825190165da7af35317d51f2dedb78b447f27bc3",
  "0x92ce68364cd1893caa8ffca5437d72e331b044599016ba12288fb4be9fe194d9",
  "0xd95b81206bf00024ba92a9784dc65d2b6930c67179003fac2984bdac47f88835",
  "0x32290d71831590058bd4b09f3c2ec0e409156840842c310fb64643b1681b19e1",
  "0x8e740133ecc69da9241497d9bd0db00ff397aa457d0a4841822499e1d5f494e0",
  "0x4fd5984beb5aba0e5933dc932288cee4b7b90c3068bf05ccf8d7d6ae9d6d4485",
  "0x4c1b4c1579719111cd53e40e46ddbcb17cb4701143e67e7fb3926d7fdd33efbf",
  "0x44635387d6483e750850183a15b86aee56bda7272d1cccf4417ab6b260b59252",
  "0x0de68e22050679e7ce08add4b343a5d59b28166dd53ad58763cc307846c7d80f",
  "0xc0bb017ccf321a33a3009234629bedf9fdef6c495c9592272ebe0656f8ccc60f",
  "0x5a15f4856d867082fe4c259d5c4ac6f5975efd1231f5f567f93e15736f176dd7",
  "0x91214b9264583378eec35d749e7336f4e7a84fe2876cd8822ee7d8099cb86127",
  "0x125f59624f7225a4fe0c1755c2b328ef6509afbd539cf66974dee292c0b314ae",
  "0x2603bcc23b83fe13c9dcd778e935670fcdcfc23d7b87e305c6040e09dbd682e0",
  "0x9341aa16049e286abfd6c3dcc193790dc2dd0a279f3a2e065b691df63edecd4b",
  "0x5c4c19a0bac9ca233136e981b27a4139ddca6141e0a2d36f9a29f8a8fb712acc",
  "0x0c1f5615f412b5cdf586dddcd2d421d2e0a0adf0596507b5cc8645f2e9d623d3",
  "0x2d1a3773f10566cef3612c1146572462ae12b2495dc6d38f7063c9fc92dc9268",
  "0x574bdbd55069a28a1b706b9ebe810d269d6e0446d21a02c42eddd355425180c5",
  "0xaa4de837ac6c9bffa728888609be666b443f7ff26a9ee0296c39740f84d84fac",
  "0x163970e022e9fcbc58739b8926bbffd1aeb835402c8b8e9d3e1824cc01ba4d20",
  "0x51933cabc4461ac960f9c3b01b144d7ddd20ef170e0dc0eb1d7b89fca5837c7c",
  "0xd7034c94b2f421d2b5926985d0e380f940f0cb3053e0ccac3f547e06c7ed6878",
  "0x3594082b56897eceaa299da487feb62f21062bad6045429184ecb83110da94e1",
  "0x1173a7b4c1b3c2d1d4613b804ca9e07ea89c9e47650c55303014c9b4d6008e42",
  "0x099c325985e45b4cc8709a869f0cb6695f7b00952cc70a6c47d73218984326a1",
  "0x6857376d0c2c5b07bfba02866e6abcebae1b29256b2099a45ce4ecbe65788613",
  "0x2223909e298ad6791195ebf19d3725cd045ab052b26fee808eea81fe2fd0af9d",
  "0xf078988ac251cab4ff9760499a4a63cb5eb82eeff2883853a9c41a06cb693d01",
  "0x7e3802cbfe4ce45745364646aad6d206ca20ba8ffbeb12a53337532f4daa4db8",
  "0xffb1627d514a210ca16e5c130c6318ab3bc1f9922a82244bc6d5f1c0298864e2",
  "0x962ca2b9b50763b0babc187d189f93857afa25f0d73c44b4fe115e5fb45fc1e4",
  "0xd057fdfd947e59b926406b7c9e1ef3b23b09ccf902e5248d8d811d1f0be0465e",
  "0x409b419eb5a162f57f559de0f9f3b3e2c200aa7699cadf2a03f30cdbeefb79af",
  "0x5098db22c9eebff01c078314a8e9d88d5eb2f4b6ed613f8fd0f935c2956f585d",
  "0x6c25f0b793c14d99de46dac8e646e1463a1a08385c4eb5ca4f9ace165c6d631f",
  "0x4e6baef27c8deffe61fbf0121a0297eded9b2b3f9e3dfefc9a3a9266b5a2c283",
  "0xf3cac6f2f8d861dc96f1579638452bb3404468047291d116302c7b6112b6ea9d",
  "0xa42bc4ff546bf72a37c9e347c244ca90161ed57fab09acada067cda227cade1a",
  "0x8b1aa9dd0c74739450df91c02d0a1c9cb7357dfcf1bed44b8eabeceb22af53b2",
  "0x16c2b3682f98dd4e5c68f25a3bf3a24d9b820c36810b51af3d69f6009687cd3c",
  "0x2c5179237b07008a9e5977ce159194b9f080a9d0390652b1211bfa95e78098e0",
  "0x8446577c95eef4811ff24bd33e75315437e0f3a96cc41521ae863aad81852e77",
  "0x9a7a10b32d2173a9e31fbb559d2f5957acd01224d834a03eadaf279d773dd721",
  "0xb443af752a5bb3f57fb033863513cd22f25f9b16cca6b111c6050bad3b23e1b2",
  "0xa3d43a6cf7628e536a0d075541d3acffe35cfa2457e78d4808c1373c09236947",
  "0x0e4506664bbce3b7083b519454e99d6668dc956b9359f99bcd2f66ac1dd8e669",
  "0xfb8524a9aba045e9feee0281aff557e9a7e9a90eeaf53bd0ffce552c18053ae0",
  "0xfe3c1ae563a7238c6213e4f2291d00d7c64d9da889f698a5213ea0a4363b5b2b",
  "0xec63d8e2684e372f338b34c857fe036d275a40d6ab6e5dcf0ef1f053e23ae8e5",
  "0x8adc4a036fd938ca903422a0a0d0d986f4c3d918bd195615f9c9d745dc1fd269",
  "0x1dab93f9671b049f8c5a887f823ffd3d69270b6352377a7af0f4c79f431665a1",
  "0xcf46f0445131fa28d7f09020e1f666ec07772b09419f9e42e0171161c6abd80c",
  "0x00c6bf2dc6d391f3eb28a53590cce0eebf863c521de113d27d708e90372a8bac",
  "0x1d5caee511a5d5aa853c23329079f5bb576f0cc7a698139ee8e28cf734e87a6a",
  "0x769a0b5a6c3c3115af894beb3d17f78f5318c05bcfd606a617a67c68f3b6d9e3",
  "0x9e41dc765383003f7f82dcc784f91ce4516b950a3224def9f3883b6bb9459117",
  "0x08931828dc58c249f819e85a8a157e4072bee69a6c1708f76e05c53c53d28b96",
  "0x02e5f6e0d1f896da0841a481fae1c72358a46d7c436ce4075881a43c011c7f25",
  "0xd9f60f11a65192fc5c7769b8f50128ee490ccd0831d5ccdceacf7f4455b154b0",
  "0x7ec2c667396d7348c4473e01a6312f169d7730c5cc7a783d4a997de24490e497",
  "0xafdda137543bdd82a6313865cd3efcb802b1c7e057c6e06c5b916e27210dacd0",
  "0x9eca34af14bd5e28f8cf6a067582b6eaee0b5269a8cc11c84fff587a7673614e",
  "0xbc5358bb4483178531d8b7432792400e49fd7299641abbbdda7f46f074262776",
  "0xbcba8d56a5b96eb26eedc886a8bb37f3b783a4923371c5ae69638a9b7022a3eb",
  "0x9079ca643690e2e3d3144cddf7bcbdba61749dcb806698b3b7d7d9cd48f40249",
  "0x8d614b77fcb1bdf9e0b6c806d5b5828306a9ad23b3aef36e9e96513dc0decef2",
  "0xd147bbcf8b42f65bc4292ee60512d4f8d78f96da6c798bb00572a064dfe08959",
  "0xe4f1a0838ba2c58b743a5f178c77ac7e5adb580007d9499be801cc6ad98c6175",
  "0xe979d41dd48b767e57575e55161553d4767316df1b8c7a5640385be48a0f7b03",
  "0x43178d265f94df0782d5573f51faad48194d63612cdd9f6c2162d557e1b2a0d9",
  "0x3bf4a4ee6cf549a49aa15a5d286a659eb70e085af96cd95a27887864ed132053",
  "0xec5c63b4bffb6000ae9a6a194d7787792ffcf1ad9ffbf8d08dc5773c91fa8208",
  "0xf1f8a86b60489e90fc1e85b062b6ab1f8a2109f9ed85c4d8bf1b87934c91610b",
  "0x4a9cef086e1fb8619c0c8085f9d18af5eadefb7bf967f12fc314c4318f39239e",
  "0xe92877d9c9fb33f712699d950bb579ec2d19a8532a3e5a98dfc383217265f9f8",
  "0x039c6b57baf67d1030b7c7971545cbf813fba8bae9e61dc4d7e2fee96cabb64f",
  "0x25bff9f2b94143076f94d08b6e6b1b0ec1bf4fc6572f0d693182d5a80bd5aae1",
  "0xeef0a8081f2a806933c13ea60f66cf0af4df83f3108014e4ce0b593a42ac904e",
  "0x113aee094885bf862acc4ad9bd9ca6ab08c6ea622f96f1b1739661eec6411535",
  "0x4560c7e2527bdf1a7b7d91d1bf012aec2e2f190a6b07385fe26af4bf071fb3d3",
  "0x6ce7e0d21e5c820ee934373ea7ec9b3fe2c4a125e9f8c7aaa99421dc3f8176bc",
  "0xdfc0d12ad0e74623b9c5ccff37cde9a6d277c62613c9b572d4609796b9b01a54",
  "0xb9a0267fce02b97debcd01bae6c26abcca68c2b4ff158dcc556772ac6e166138",
  "0x8372450dfaee7344fd9500fefe30cc82605bbb051a354d03505c27e970512684",
  "0x9e1e3dcc68cce809f94a4f28c4d81edf927327723865970b8b5d0f86e4026339",
  "0x72a33abadf5b656e26b901314fa452225a26764fb4e662c75a33f472535de3b0",
  "0x6bb16abde8070a1837b3bf360f97d99b99d13c44a34a2716ed65054c3374eacd",
  "0x284f7ed0fecde68692b3dc7a56070985c5dd656bf64869e4aebe03d551992a33",
  "0x5c157dc17fb21730e80494bc75fc619527b5605974e770a48c9ab17f9a33ce2e",
  "0x80bacca525c275ca1e07b7e9913885ea4398e47c7b0cb1031e0956ae9b1ff5d4",
  "0x8306432f3de0d808743e925b9a909e19395df22b027ec637e8230e5ab4756a30",
  "0x7cf86560935be7524186fae99ce6c68a0bf674277cda4e8ae19a30dbe70b7051",
  "0x60301389ef3cac316e65d0358d43c6f4973c1a7e36672866d899e5325fe14824",
  "0x02705e7a3c9e9628f700b6d06ffac7d91893e6931131d9356649ed26c13bce95",
  "0xd52bfd09af275aa4fb863dee051d2031fc8be5bef28b2078c85cd1242549a6ef",
  "0xb39cd65cd49601d25cb5b23043a6b32096b120f7883f12379b9f52ed47c47090",
  "0x75f7691c47a49723499a2ad398a5458330633e5074bd27e66249db221857b30b",
  "0x7800438d8846d629871536f7d73f83bf9a6fed148ac11a20434a0f5d18dd179e",
  "0x14980941404ad214677481f866f2e7f425b6c58683152f1234581f8460647650",
  "0x88eb4acb0046b340b15472962a01c259c57e5ed8d417042dafef83cdce940192",
  "0xf5827771e58d6089440e69db5b3db954c1b7f88f451d9dd2562906aa755526c2",
  "0x2ba6e182a657d4d3c275e815c89b57ce72a99917f916458a2d11c3e99b056107",
  "0xd09bc3595de2101021c9c00aa4987b48566b802d22fcbe25417ac8e14a2aae4d",
  "0xbd88cfa5cb86915d53bfa4c2272c6b9a7c474f504c816bd2ea1e51605b13c2fd",
  "0xac347cf902d8a6d512e1ae3c7c56886d4d0790742ddc341fbe2fb9b25771a337",
  "0x4a65cf29fff37ce102386f4d07aee9a08d12c154b92ff5a7fb93796bbf8d0d1b",
  "0x2ab545ccc3c6b54b23ab9f8d56e9998ca6e61ce1d88865eef55ff4120e5c62c2",
  "0x79f69f4ad4e0beca9f9a9c4b3ec653167e9623462488cf9d1b21ff8b4eb3e552",
  "0x9d6356115ba1a714825ba0fac0643d59899abf2a1d5c93dc9ad04f68412e0353",
  "0xb627b0d39b75aedefdb07c1ebf3a6dfe18e8d91d3f9452fa9d6a854958e712e2",
  "0xa6c200d7abf2feab123823b4d125617497585c9a2c044d43e2d2901169391114",
  "0x6da2dfdfab3afc7a8074dedcb332cfe3c96355de9890fada2c4d0f212aee34ae",
  "0xd46d92ab4b9406969498a72a2b5c991fb5db626528fb115fc07e24c9f0898400",
  "0x6a3123c72bf18a0f001b1a18ef5d6d6afb894d3ad5a1b7bd973d5fe699a52b58",
  "0x614779ddcc47463dc980b5e44255cf9d4c862bd0b62df958964080ebab0c1a9b",
  "0x026ead1febdf9abc8a3d0a39fb61b93163a1ef08ad95b587221ff6f50baa8a49",
  "0xd87e351cc99ea8753d63c84e89344d8a217b60dad41cd50ebb31324d4ea97d33",
  "0xfe820708b9e23fde5cf6d6244c2aa765cb641157dd49d1f3343279d8341bca73",
  "0x052f714924d6d8572bc8db0280a73921dd8a5f6204ff2150ceba4c3245e59bd7",
  "0xddb4e2c73b0963c622bd3eb5d44f1934292b5b0bda5cf14be91004077bd5e82e",
  "0x815947493428aac822f41ac44385952b5750843e0d38959f82ad098a75420944",
  "0xa4d2a3f2e10eec51d3bbdd9b8c1ec554fb7aad05c2d9b46c8509872e19b452f5"
];

const imageUrls = {
  "0x052f714924d6d8572bc8db0280a73921dd8a5f6204ff2150ceba4c3245e59bd7":
    "https://img.pokemondb.net/sprites/home/normal/bulbasaur.png",
  "0x0eaef05fac11d1d3bc8a1ce7c8760ec7720937a7f4975616ab039936a163cf36":
    "https://img.pokemondb.net/sprites/home/normal/ivysaur.png",
  "0x3b01c8dc66a33a83ce2912a39c2bc1c8a4d3bb6f52c84c59a8b22b7ff36a71f7":
    "https://img.pokemondb.net/sprites/home/normal/venusaur.png",
  "0xe5c3edd7ab075c94041b1efa3ea74e190bc0843b4ea2bb4a9db31ab6aad17ea6":
    "https://img.pokemondb.net/sprites/home/normal/charmander.png",
  "0x599e939473ad634ec6c224a72b96b2374f1663b8a6101ff56376e34f0eb3edd9":
    "https://img.pokemondb.net/sprites/home/normal/charmeleon.png",
  "0x2b09de2042ede6d2796dd74a66413592be03f9b7d7a0d0eb67440654a894444b":
    "https://img.pokemondb.net/sprites/home/normal/charizard.png",
  "0xcdde0506531fb4ed35554e8f2cffbd671c30bfa94d5ac35a6ab49e0f88793b3b":
    "https://img.pokemondb.net/sprites/home/normal/squirtle.png",
  "0x68f54910bc755d195adc9ed1130165725557f3cc2f3d4e748c457aad2d3253f2":
    "https://img.pokemondb.net/sprites/home/normal/wartortle.png",
  "0x1e0293e60880c3089881763954bead469c4ad24b14cd19fb0512816a67569313":
    "https://img.pokemondb.net/sprites/home/normal/blastoise.png",
  "0xdcecde5053fe1a7b32f3ac9a0e3358a8b9e984eebcfe2fde76aabd6256f4e73b":
    "https://img.pokemondb.net/sprites/home/normal/caterpie.png",
  "0x1e15b6bf4c102abc8db4851e3431d447e1cebfa96b743beac2e6abe558fc7428":
    "https://img.pokemondb.net/sprites/home/normal/metapod.png",
  "0x4b030746182e87e835733cddfeabc6d3b0b1c3b5551aaf8d51b2f84051dcb47a":
    "https://img.pokemondb.net/sprites/home/normal/butterfree.png",
  "0x0b449cf16c1b8ac804102e8edaeb010e77747bd11b8485dd9981a572e5561e2e":
    "https://img.pokemondb.net/sprites/home/normal/weedle.png",
  "0xb792db5daac1ce7b5247c53e6cd4293b40c1c79d5c56a27a31c2d0ebba91fdc7":
    "https://img.pokemondb.net/sprites/home/normal/kakuna.png",
  "0x0d4286f7ad55ead78ef7420bdd185b110ad52e006cdb0868de928035ffbb8982":
    "https://img.pokemondb.net/sprites/home/normal/beedrill.png",
  "0xf2435d67755fb07a226e775acf29f5308ec2ff430e81f57f7575d38d05aa5a67":
    "https://img.pokemondb.net/sprites/home/normal/pidgey.png",
  "0x241162e81383c8a18c7b008df4dbfa93858769fa7bbcb245e4a8af5074808850":
    "https://img.pokemondb.net/sprites/home/normal/pidgeotto.png",
  "0x8b9c8b5f8412a9a26a080b943a8374c727884f4e90947151f7d10ffdcc3812c0":
    "https://img.pokemondb.net/sprites/home/normal/pidgeot.png",
  "0x3f8dd85c1d6e8e6ee5242ea1096dbe29f55120a7b20c471d90b51c259c21e3ea":
    "https://img.pokemondb.net/sprites/home/normal/rattata.png",
  "0x18e382f7cc1ccac695b7d67ee6f2f951dc9123669234a861a749423d61dbecaf":
    "https://img.pokemondb.net/sprites/home/normal/raticate.png",
  "0x05254b949d9e59480e899897f44b59e7c528805bd2afb99b78fe0a752eca3ed6":
    "https://img.pokemondb.net/sprites/home/normal/spearow.png",
  "0xce64ee4672ed1f914f3a8d11c6f6c70bf965b843e0d01b6c0a93dcb0ff11de0f":
    "https://img.pokemondb.net/sprites/home/normal/fearow.png",
  "0x3b053ee43c0d45bd45d45118702b8ff6b866429b331e12103c1542b5d1770732":
    "https://img.pokemondb.net/sprites/home/normal/ekans.png",
  "0x622fb893bcecdb79390506dd09b258792508dd82be96bdfb85823352f4e5740e":
    "https://img.pokemondb.net/sprites/home/normal/arbok.png",
  "0x41940fc09a6c595943488ddb64016ef19a1eac457abf7a56ce8ca3be1f313f23":
    "https://img.pokemondb.net/sprites/home/normal/pikachu.png",
  "0x56ec0d5cd9fc24b23ea736253ef0067543b82dc8866df270ebb84c323fd0bf34":
    "https://img.pokemondb.net/sprites/home/normal/raichu.png",
  "0x03c1f875f3f2ca75a87c89b2dc107d46a0d2903c9fceca0a1301437442911aa7":
    "https://img.pokemondb.net/sprites/home/normal/sandshrew.png",
  "0x5ab5763ae8de49c06111e114b693b3d933a16718282eddd97e7cccbaf470fe75":
    "https://img.pokemondb.net/sprites/home/normal/sandslash.png",
  "0xe90324026d080a86d99de4b5c5ff86d1b40ab24676794a648e5ec9c74b7b60e4":
    "https://img.pokemondb.net/sprites/home/normal/nidoran-f.png",
  "0xd0f77a182c596b76ac775d9fcd0bd800f9be72c020472b28b305ebe455cc08e1":
    "https://img.pokemondb.net/sprites/home/normal/nidorina.png",
  "0xb6bdf7a2b30449a8759d9fadf1b571b181cd4c96c41158ac0922b799f33e43f6":
    "https://img.pokemondb.net/sprites/home/normal/nidoqueen.png",
  "0x971bfa47852b364c1644b068cbfd58d053e3e2fd234c61a4c43f405235d0af25":
    "https://img.pokemondb.net/sprites/home/normal/nidoran-m.png",
  "0xfdc187f73c33a8d0749574a8d26d0c7d0a391c71bf1495890febe50a65af0bfb":
    "https://img.pokemondb.net/sprites/home/normal/nidorino.png",
  "0x40c6a2e769ec0126aa2847dc6e710f4fe253fbf834e8fb654bb593537a10e755":
    "https://img.pokemondb.net/sprites/home/normal/nidoking.png",
  "0xfa1a7c80180b70e3ac37883ddb36795405968923ccf61cc2c8e1d03ce0665f96":
    "https://img.pokemondb.net/sprites/home/normal/clefairy.png",
  "0x6ca75f96dfebe7ce98f16dd3530edc100a49b42cb62640dc6e93b4c9f4e09f1f":
    "https://img.pokemondb.net/sprites/home/normal/clefable.png",
  "0xc75ad06a838f26fb6e61f9a957eb518b52f3351e1c66687b9d55ba3d1c102e11":
    "https://img.pokemondb.net/sprites/home/normal/vulpix.png",
  "0x0711d34c66e4be073b85a6363a09bab348a64b2f2cf1554306e62a641c11006d":
    "https://img.pokemondb.net/sprites/home/normal/ninetales.png",
  "0x75ad97bff4a4fc7d8bc51c9a928bc62e7813f41f4d10a960c5fc078ff1411583":
    "https://img.pokemondb.net/sprites/home/normal/jigglypuff.png",
  "0x9705f66c5fca341980be14e0a6b327361539b4f05e44a096eb1c7a24ea5286ae":
    "https://img.pokemondb.net/sprites/home/normal/wigglytuff.png",
  "0x8ab2158796e5b18c5019e6e9ef82b351930b8b865d5128517d4ec2b55808b73c":
    "https://img.pokemondb.net/sprites/home/normal/zubat.png",
  "0xb1e9a382ef25e23af31c767fe6ef0ed12792a3a491dabfca32952c86cbbef470":
    "https://img.pokemondb.net/sprites/home/normal/golbat.png",
  "0xb09ca37abb1ba2575b0a1f91a16c1d83120a5f95793b7215fb54c4bb5c16f6be":
    "https://img.pokemondb.net/sprites/home/normal/oddish.png",
  "0x0b6c6f92eb92741139abbe0afb1256e514111f2bac4bd9c24c8d475ca8a2ced2":
    "https://img.pokemondb.net/sprites/home/normal/gloom.png",
  "0x07ce92bd7883695cbe3722039fe756d6fbc0b325548eb96ded3db5082a431e13":
    "https://img.pokemondb.net/sprites/home/normal/vileplume.png",
  "0x08b49a9372f602f423a49457d5bc347ea83cbbb761582fc1f5722176807b1a8a":
    "https://img.pokemondb.net/sprites/home/normal/paras.png",
  "0x53fc5914f0b9eaa5fe8b5c2335126a3bbba06cee13f3b414ae19b5a0a8ba5e28":
    "https://img.pokemondb.net/sprites/home/normal/parasect.png",
  "0x6b79734f851eaece2d1105ed0b21dcbcb17ca963ec7987562910c18a336cc6ab":
    "https://img.pokemondb.net/sprites/home/normal/venonat.png",
  "0xa2838ea21bd79f081bf4ec8a8ef77a76e56b90ef940bd2a4d5bb8a3e03575651":
    "https://img.pokemondb.net/sprites/home/normal/venomoth.png",
  "0x7cb3c026f7a768941e3601dc02eb0516a37dddcfb097229c240e2c1d024fee3e":
    "https://img.pokemondb.net/sprites/home/normal/diglett.png",
  "0xb8eb039fb3c6559aabb731aa35066198a07950e6ea16b44d65315f4e0d687715":
    "https://img.pokemondb.net/sprites/home/normal/dugtrio.png",
  "0x8a8068504a72490d6a6e36cc5057b996cd1644e09b88e2911ff7ddf41e3a21ec":
    "https://img.pokemondb.net/sprites/home/normal/meowth.png",
  "0xef0ea11e2c4a3bc40435b6ed93285f4195f042a0abfb6611f3d01d4639da5f7c":
    "https://img.pokemondb.net/sprites/home/normal/persian.png",
  "0x67c5784aceaab819a55a12df48cd0176e17a861d3f4b05541ddca91b666da736":
    "https://img.pokemondb.net/sprites/home/normal/psyduck.png",
  "0xb61ead580165a24d672348757b752ea60d75b6415c27b14fe31084743a16a817":
    "https://img.pokemondb.net/sprites/home/normal/golduck.png",
  "0x96dae8b28d0f3d42ce05e4ecb3887be8988bb616bdacd0ee5e5a9bbdbe6b1d1b":
    "https://img.pokemondb.net/sprites/home/normal/mankey.png",
  "0xa4bd814f3495426b2b0145e4283934c8021b831f6b9a82ac1d66c67c034e4ffd":
    "https://img.pokemondb.net/sprites/home/normal/primeape.png",
  "0x91ef1cee19fb8e56dc2104b66bc5466aa45b80344f5c81b0dcc68f76729f9fc2":
    "https://img.pokemondb.net/sprites/home/normal/growlithe.png",
  "0xe770a9900fac2560cefad6d97dc1fe22f472a8dd9eeda7cc1409f17f026c0567":
    "https://img.pokemondb.net/sprites/home/normal/arcanine.png",
  "0x78c75e689491571e15bdd4156b927e94adc5adabf55bdea3009ed0e49bb8a18b":
    "https://img.pokemondb.net/sprites/home/normal/poliwag.png",
  "0x4c747b8ac6e817ff86addf887b83d95d9c6b8efb732e658312055e836560b64e":
    "https://img.pokemondb.net/sprites/home/normal/poliwhirl.png",
  "0x29cfd7028a9ef6846a07f346f8c0f500c98f48df5223b79abae2e41b591b5b7c":
    "https://img.pokemondb.net/sprites/home/normal/poliwrath.png",
  "0x95ebdb59f0b62763acec04711e4ead62e0bbd4a28b751146e6f551ec6535169f":
    "https://img.pokemondb.net/sprites/home/normal/abra.png",
  "0x1c7c29ede603323cc7078fc14ff65479fd5b816959bdd70892c5cd2180a9857d":
    "https://img.pokemondb.net/sprites/home/normal/kadabra.png",
  "0xee998f9750a2643128b8fa329062d6b1898ae614a3fba33d2491cb2e53ae9623":
    "https://img.pokemondb.net/sprites/home/normal/alakazam.png",
  "0xc40e57353ebd925edffdbb680abf21948f113c73b5605d86425647d75a730228":
    "https://img.pokemondb.net/sprites/home/normal/machop.png",
  "0x2cc6e2c64a6b7c58a6e19a9f44ef7c5ce4868d51ac0326c39f1aba5f9192796c":
    "https://img.pokemondb.net/sprites/home/normal/machoke.png",
  "0x747086ac6b9b3f5fbe32c6c9c02cdca34074804992dcee2500645d5662cd0305":
    "https://img.pokemondb.net/sprites/home/normal/machamp.png",
  "0x26c33138777f204049b616577e4981199f9197e07eb7147856b5e73a562cd93f":
    "https://img.pokemondb.net/sprites/home/normal/bellsprout.png",
  "0x47a3452ed9cc96f7fbac91c611a8cbf943c7774bf4e0d914d8988277eac20006":
    "https://img.pokemondb.net/sprites/home/normal/weepinbell.png",
  "0x088951c362a6d884db3a42b29185cc99a02e1110c69ac5f258b4f3c1f81e6dfc":
    "https://img.pokemondb.net/sprites/home/normal/victreebel.png",
  "0x2d8aada2220eec6ad5c86dd85dbc0788bf83e4666d30e63da90bd07f7ec01a1f":
    "https://img.pokemondb.net/sprites/home/normal/tentacool.png",
  "0x3c66e6522f1c32ae8008939ea76cc224b72a11460be6b326207eaa32e32a803d":
    "https://img.pokemondb.net/sprites/home/normal/tentacruel.png",
  "0x5a06dfc1e1628a218a899f61794ba886804b9f23aef597308065bcd98ed68604":
    "https://img.pokemondb.net/sprites/home/normal/geodude.png",
  "0xe81cbf37bf59708d538f1e38648d17d13033c8abb2e1f9870b4345fa5f00da65":
    "https://img.pokemondb.net/sprites/home/normal/graveler.png",
  "0xe1b8e7155bd3b2e148c7cb0ec6555b3d9a08069a4a6dbd4c2e6395100eee7ce5":
    "https://img.pokemondb.net/sprites/home/normal/golem.png",
  "0x97fa7278edc36d1d8ce4704cc37db28de289fe07df0ee1a4c23ca642ed9e327e":
    "https://img.pokemondb.net/sprites/home/normal/ponyta.png",
  "0x48c6743ee11201ccc53832f4f37bd2d41317e3e62b8a4e644841975f2b439ee5":
    "https://img.pokemondb.net/sprites/home/normal/rapidash.png",
  "0x4eaab26b8d96b6cbfdfbb7b61cb6d8cb32d4ec64733f74a3043b5f72a4b54c82":
    "https://img.pokemondb.net/sprites/home/normal/slowpoke.png",
  "0x525c8dee78eb2d62266322df8cd867d5a8c4886e39247fa466007516e0e51544":
    "https://img.pokemondb.net/sprites/home/normal/slowbro.png",
  "0x67a26167209f4bb071f4932f34880801da838b6b71b6eb659c9a8a815a8a895d":
    "https://img.pokemondb.net/sprites/home/normal/magnemite.png",
  "0x7f425b592527d7e79ad837ea5bf7873982143eb8018fe3e9b4d942dc64dbad22":
    "https://img.pokemondb.net/sprites/home/normal/magneton.png",
  "0x906d464c0808ea5d510521dc981e63a550e60b7ae944a7e0357f21c3b3506101":
    "https://img.pokemondb.net/sprites/home/normal/farfetchd.png",
  "0x6bc9ed6e1f6d5f3d4ea8a3ec3ef813010425cfdf58c74105663931b8d7633fe3":
    "https://img.pokemondb.net/sprites/home/normal/doduo.png",
  "0xf35ff542d38cf989ba7bc66e820c318c1b680ceb07c9698c95e1c500b8096ac2":
    "https://img.pokemondb.net/sprites/home/normal/dodrio.png",
  "0x818c4ab821a239f460b7e5cfaeaf606da0f4c243bacf8f6b8e079eceab1ee67d":
    "https://img.pokemondb.net/sprites/home/normal/seel.png",
  "0x44ec11e29bdf65942497ba526e4e4664a950f1a07f061c36ab0d990a3b631def":
    "https://img.pokemondb.net/sprites/home/normal/dewgong.png",
  "0xd7d3f0c88c2b8cffa22974580133909a77ff22a82d5abb1baee370f567b9a661":
    "https://img.pokemondb.net/sprites/home/normal/grimer.png",
  "0x84898ad3c84647413455f5e8baab218af820c64e0871a13734c2eea8acb25ed3":
    "https://img.pokemondb.net/sprites/home/normal/muk.png",
  "0xb563339e147057e8cdb96087c5449744fe4b7654a43f4c9e4c17eb70d9f9ef89":
    "https://img.pokemondb.net/sprites/home/normal/shellder.png",
  "0x04450bc0bfe37eee08a765b66a7698ea4cd1d3636092433d8d857c435ddd8d63":
    "https://img.pokemondb.net/sprites/home/normal/cloyster.png",
  "0x55d0497f1cb255bfacebdaf626a91d29b0cd239dfd5e4781b6ac4c4a6f7fc0e6":
    "https://img.pokemondb.net/sprites/home/normal/gastly.png",
  "0xf29e9d41527f6cecb03deac6d99ceb2479a7f8164244464d4e477c9bf74a54b7":
    "https://img.pokemondb.net/sprites/home/normal/haunter.png",
  "0x1f147279cef794f9cd9273cac7e2680583a9641cb9b848b2d1a2ff6c9fa453fa":
    "https://img.pokemondb.net/sprites/home/normal/gengar.png",
  "0xfa578e5815589e74f06c6f64f74ec4f7cfd32f20ed6a7e3518e28b08c54ae4e5":
    "https://img.pokemondb.net/sprites/home/normal/onix.png",
  "0x5bcb0bd3932f7b2b181d1774a191b9fd3b30439963118978942cc1f9f079dd09":
    "https://img.pokemondb.net/sprites/home/normal/drowzee.png",
  "0x79ca8dd2d0532714bffc31054b5cdcbfad8bc15e414dbb0405df7d4b01b2aa9e":
    "https://img.pokemondb.net/sprites/home/normal/hypno.png",
  "0xecdb348465987c307f409f036592fa885212259eac850fec8165e035c1f46071":
    "https://img.pokemondb.net/sprites/home/normal/krabby.png",
  "0xd276cb6c8e3f83aed127d1c37716edfb7f9678da18df1e2a4f1de1d9d0985786":
    "https://img.pokemondb.net/sprites/home/normal/kingler.png",
  "0xe53eea9a685c16b7eb385fb0e7892c766285e69e166e89549173c4d8d2987832":
    "https://img.pokemondb.net/sprites/home/normal/voltorb.png",
  "0xd130aff8f55df6d60af3d359c48a3dfb7cd6803bd227c965e7fcb84e12943dcb":
    "https://img.pokemondb.net/sprites/home/normal/electrode.png",
  "0x55baafa2cea17a9d974259c2562f10aa3bb8db0aa462c0dd3ed71b943486752c":
    "https://img.pokemondb.net/sprites/home/normal/exeggcute.png",
  "0x0a1dd11b13c736fa505dc1fc75a536011f666ea34183c9050d8ce8559da704e0":
    "https://img.pokemondb.net/sprites/home/normal/exeggutor.png",
  "0xb9e19e57965f3c6343fa3b55b05085c84f7cf6655b4cb200beb5e5fdef1bcaa6":
    "https://img.pokemondb.net/sprites/home/normal/cubone.png",
  "0xf27bf9286a65de8e590055004a1aa87d303c9c91560c3d75ee57e9d972c502e3":
    "https://img.pokemondb.net/sprites/home/normal/marowak.png",
  "0x0a9ee4e97e46cd37a2d73ae75a2eb3f01e42207740dd602d3b27af293f0c7913":
    "https://img.pokemondb.net/sprites/home/normal/hitmonlee.png",
  "0xc3145056eb696227f8cea53ed58c215239bfafe15efc1257b9548eae11c469e8":
    "https://img.pokemondb.net/sprites/home/normal/hitmonchan.png",
  "0xe12c3e94119f5b62e0bf60b7f92001d700fcfa3136cd45c75399eaa265015b5e":
    "https://img.pokemondb.net/sprites/home/normal/lickitung.png",
  "0x983f6f08106fd96f7a9a11be36e49ea9db40c3ed330fd2cee69444a96528a269":
    "https://img.pokemondb.net/sprites/home/normal/koffing.png",
  "0xf10fbe65e1672d64a24b8c07d7e2b61f901f27098a29f60e1b4b56a4bbb195a5":
    "https://img.pokemondb.net/sprites/home/normal/weezing.png",
  "0x9894211e2d76d4394611a7690088bab757b653dc950d2908c2b6456f348e8454":
    "https://img.pokemondb.net/sprites/home/normal/rhyhorn.png",
  "0x68018eb8086dcc9797a1ac2b53bcc84bdecc5ecca551afeb1f39918c8c256692":
    "https://img.pokemondb.net/sprites/home/normal/rhydon.png",
  "0xa6d8f8e70cbf33b50d9905a1dbf2ed760ecd4aa68925a7c0d2546ed7ac3a4815":
    "https://img.pokemondb.net/sprites/home/normal/chansey.png",
  "0x4f5b804300d52d19f2e4b4e67026d45f0e6834138cf48f10f0942c9f82ce65cf":
    "https://img.pokemondb.net/sprites/home/normal/tangela.png",
  "0xd48329ae40dadb03ceaf1a2a4377343afeca6088a8e97bdcae3f221ef13a720c":
    "https://img.pokemondb.net/sprites/home/normal/kangaskhan.png",
  "0xe54ec25c66fba6b40e84b2e53a432087b59018106e9e950cf78018ade2eaa623":
    "https://img.pokemondb.net/sprites/home/normal/horsea.png",
  "0x52aa4c6c02203785f419cbe10ab713decc944bd56d02a3fb08becf873481c863":
    "https://img.pokemondb.net/sprites/home/normal/seadra.png",
  "0x852294eaef8bc966d3e9b8824c8a797f28db03ae6668897860a0c1d8eddaad08":
    "https://img.pokemondb.net/sprites/home/normal/goldeen.png",
  "0x5bc49fc514417751569f8ab04a90fa71df86776584e17fa35f1204dbc419febf":
    "https://img.pokemondb.net/sprites/home/normal/seaking.png",
  "0xadc7519059d1246288e1b7e63ecda6222cfd85921723565360fc74e3b924f225":
    "https://img.pokemondb.net/sprites/home/normal/staryu.png",
  "0x3a1979eb69a6535760718e1962cad7838901eb92c7d62f99a4f3f991978a9b80":
    "https://img.pokemondb.net/sprites/home/normal/starmie.png",
  "0x72b8aae05d2f7e3f7ee35ec3350405bfcc1fa15de3122b1f57f555a46ad90643":
    "https://img.pokemondb.net/sprites/home/normal/mr-mime.png",
  "0x5ea2f18ccec8bd7d9e546177a4b9432b57d678e3766f4aabe6ef6d193be5efe9":
    "https://img.pokemondb.net/sprites/home/normal/scyther.png",
  "0x1623acb2767f1e1da6082dff3c0303910ba6bcf5f37b8bc6b62dbb48a6fa3d8f":
    "https://img.pokemondb.net/sprites/home/normal/jynx.png",
  "0x25d12e70b6df8346dc5b53e5d22cfe2d3012f53b3af96ac8ef06f3e312c0681a":
    "https://img.pokemondb.net/sprites/home/normal/electabuzz.png",
  "0x9ac922a62aa5a5bad10545294ca839122b7292e2e595ae285565366f04901c66":
    "https://img.pokemondb.net/sprites/home/normal/magmar.png",
  "0xdde1e03d9550ed48e4cff65e4bb49be55c27347ee0ba3f536acad7d495b7c6f3":
    "https://img.pokemondb.net/sprites/home/normal/pinsir.png",
  "0x8fec5e3f861eca32d67d3c7124ea480cf5e25f9752a30ea72215815a7634060d":
    "https://img.pokemondb.net/sprites/home/normal/tauros.png",
  "0xc08fda12d3e8e302307982ee0c5bc02582aa93e9dff174d4d85c53e9ba5ff568":
    "https://img.pokemondb.net/sprites/home/normal/magikarp.png",
  "0x68789dd8a4ccc3531f94cc9c8078e11035855e39a5139e16bca5fcd1b8550c29":
    "https://img.pokemondb.net/sprites/home/normal/gyarados.png",
  "0x14d1a843cc3943eeca346c0a5ea1013f4375b673ce256c153970fbe9f9becc48":
    "https://img.pokemondb.net/sprites/home/normal/lapras.png",
  "0xf595ebaee3cacf87af64198490b2dc8e8f028964dbfabdcb5cfdd9f8af8b306f":
    "https://img.pokemondb.net/sprites/home/normal/ditto.png",
  "0xdecd98501958c7fe43ba9267825190165da7af35317d51f2dedb78b447f27bc3":
    "https://img.pokemondb.net/sprites/home/normal/eevee.png",
  "0x92ce68364cd1893caa8ffca5437d72e331b044599016ba12288fb4be9fe194d9":
    "https://img.pokemondb.net/sprites/home/normal/vaporeon.png",
  "0xd95b81206bf00024ba92a9784dc65d2b6930c67179003fac2984bdac47f88835":
    "https://img.pokemondb.net/sprites/home/normal/jolteon.png",
  "0x32290d71831590058bd4b09f3c2ec0e409156840842c310fb64643b1681b19e1":
    "https://img.pokemondb.net/sprites/home/normal/flareon.png",
  "0x8e740133ecc69da9241497d9bd0db00ff397aa457d0a4841822499e1d5f494e0":
    "https://img.pokemondb.net/sprites/home/normal/porygon.png",
  "0x4fd5984beb5aba0e5933dc932288cee4b7b90c3068bf05ccf8d7d6ae9d6d4485":
    "https://img.pokemondb.net/sprites/home/normal/omanyte.png",
  "0x4c1b4c1579719111cd53e40e46ddbcb17cb4701143e67e7fb3926d7fdd33efbf":
    "https://img.pokemondb.net/sprites/home/normal/omastar.png",
  "0x44635387d6483e750850183a15b86aee56bda7272d1cccf4417ab6b260b59252":
    "https://img.pokemondb.net/sprites/home/normal/kabuto.png",
  "0x0de68e22050679e7ce08add4b343a5d59b28166dd53ad58763cc307846c7d80f":
    "https://img.pokemondb.net/sprites/home/normal/kabutops.png",
  "0xc0bb017ccf321a33a3009234629bedf9fdef6c495c9592272ebe0656f8ccc60f":
    "https://img.pokemondb.net/sprites/home/normal/aerodactyl.png",
  "0x5a15f4856d867082fe4c259d5c4ac6f5975efd1231f5f567f93e15736f176dd7":
    "https://img.pokemondb.net/sprites/home/normal/snorlax.png",
  "0x91214b9264583378eec35d749e7336f4e7a84fe2876cd8822ee7d8099cb86127":
    "https://img.pokemondb.net/sprites/home/normal/articuno.png",
  "0x125f59624f7225a4fe0c1755c2b328ef6509afbd539cf66974dee292c0b314ae":
    "https://img.pokemondb.net/sprites/home/normal/zapdos.png",
  "0x2603bcc23b83fe13c9dcd778e935670fcdcfc23d7b87e305c6040e09dbd682e0":
    "https://img.pokemondb.net/sprites/home/normal/moltres.png",
  "0x9341aa16049e286abfd6c3dcc193790dc2dd0a279f3a2e065b691df63edecd4b":
    "https://img.pokemondb.net/sprites/home/normal/dratini.png",
  "0x5c4c19a0bac9ca233136e981b27a4139ddca6141e0a2d36f9a29f8a8fb712acc":
    "https://img.pokemondb.net/sprites/home/normal/dragonair.png",
  "0x0c1f5615f412b5cdf586dddcd2d421d2e0a0adf0596507b5cc8645f2e9d623d3":
    "https://img.pokemondb.net/sprites/home/normal/dragonite.png",
  "0x2d1a3773f10566cef3612c1146572462ae12b2495dc6d38f7063c9fc92dc9268":
    "https://img.pokemondb.net/sprites/home/normal/mewtwo.png",
  "0x574bdbd55069a28a1b706b9ebe810d269d6e0446d21a02c42eddd355425180c5":
    "https://img.pokemondb.net/sprites/home/normal/mew.png",
  "0xaa4de837ac6c9bffa728888609be666b443f7ff26a9ee0296c39740f84d84fac":
    "https://img.pokemondb.net/sprites/home/normal/chikorita.png",
  "0x163970e022e9fcbc58739b8926bbffd1aeb835402c8b8e9d3e1824cc01ba4d20":
    "https://img.pokemondb.net/sprites/home/normal/bayleef.png",
  "0x51933cabc4461ac960f9c3b01b144d7ddd20ef170e0dc0eb1d7b89fca5837c7c":
    "https://img.pokemondb.net/sprites/home/normal/meganium.png",
  "0xd7034c94b2f421d2b5926985d0e380f940f0cb3053e0ccac3f547e06c7ed6878":
    "https://img.pokemondb.net/sprites/home/normal/cyndaquil.png",
  "0x3594082b56897eceaa299da487feb62f21062bad6045429184ecb83110da94e1":
    "https://img.pokemondb.net/sprites/home/normal/quilava.png",
  "0x1173a7b4c1b3c2d1d4613b804ca9e07ea89c9e47650c55303014c9b4d6008e42":
    "https://img.pokemondb.net/sprites/home/normal/typhlosion.png",
  "0x099c325985e45b4cc8709a869f0cb6695f7b00952cc70a6c47d73218984326a1":
    "https://img.pokemondb.net/sprites/home/normal/totodile.png",
  "0x6857376d0c2c5b07bfba02866e6abcebae1b29256b2099a45ce4ecbe65788613":
    "https://img.pokemondb.net/sprites/home/normal/croconaw.png",
  "0x2223909e298ad6791195ebf19d3725cd045ab052b26fee808eea81fe2fd0af9d":
    "https://img.pokemondb.net/sprites/home/normal/feraligatr.png",
  "0xf078988ac251cab4ff9760499a4a63cb5eb82eeff2883853a9c41a06cb693d01":
    "https://img.pokemondb.net/sprites/home/normal/sentret.png",
  "0x7e3802cbfe4ce45745364646aad6d206ca20ba8ffbeb12a53337532f4daa4db8":
    "https://img.pokemondb.net/sprites/home/normal/furret.png",
  "0xffb1627d514a210ca16e5c130c6318ab3bc1f9922a82244bc6d5f1c0298864e2":
    "https://img.pokemondb.net/sprites/home/normal/hoothoot.png",
  "0x962ca2b9b50763b0babc187d189f93857afa25f0d73c44b4fe115e5fb45fc1e4":
    "https://img.pokemondb.net/sprites/home/normal/noctowl.png",
  "0xd057fdfd947e59b926406b7c9e1ef3b23b09ccf902e5248d8d811d1f0be0465e":
    "https://img.pokemondb.net/sprites/home/normal/ledyba.png",
  "0x409b419eb5a162f57f559de0f9f3b3e2c200aa7699cadf2a03f30cdbeefb79af":
    "https://img.pokemondb.net/sprites/home/normal/ledian.png",
  "0x5098db22c9eebff01c078314a8e9d88d5eb2f4b6ed613f8fd0f935c2956f585d":
    "https://img.pokemondb.net/sprites/home/normal/spinarak.png",
  "0x6c25f0b793c14d99de46dac8e646e1463a1a08385c4eb5ca4f9ace165c6d631f":
    "https://img.pokemondb.net/sprites/home/normal/ariados.png",
  "0x4e6baef27c8deffe61fbf0121a0297eded9b2b3f9e3dfefc9a3a9266b5a2c283":
    "https://img.pokemondb.net/sprites/home/normal/crobat.png",
  "0xf3cac6f2f8d861dc96f1579638452bb3404468047291d116302c7b6112b6ea9d":
    "https://img.pokemondb.net/sprites/home/normal/chinchou.png",
  "0xa42bc4ff546bf72a37c9e347c244ca90161ed57fab09acada067cda227cade1a":
    "https://img.pokemondb.net/sprites/home/normal/lanturn.png",
  "0x8b1aa9dd0c74739450df91c02d0a1c9cb7357dfcf1bed44b8eabeceb22af53b2":
    "https://img.pokemondb.net/sprites/home/normal/pichu.png",
  "0x16c2b3682f98dd4e5c68f25a3bf3a24d9b820c36810b51af3d69f6009687cd3c":
    "https://img.pokemondb.net/sprites/home/normal/cleffa.png",
  "0x2c5179237b07008a9e5977ce159194b9f080a9d0390652b1211bfa95e78098e0":
    "https://img.pokemondb.net/sprites/home/normal/igglybuff.png",
  "0x8446577c95eef4811ff24bd33e75315437e0f3a96cc41521ae863aad81852e77":
    "https://img.pokemondb.net/sprites/home/normal/togepi.png",
  "0x9a7a10b32d2173a9e31fbb559d2f5957acd01224d834a03eadaf279d773dd721":
    "https://img.pokemondb.net/sprites/home/normal/togetic.png",
  "0xb443af752a5bb3f57fb033863513cd22f25f9b16cca6b111c6050bad3b23e1b2":
    "https://img.pokemondb.net/sprites/home/normal/natu.png",
  "0xa3d43a6cf7628e536a0d075541d3acffe35cfa2457e78d4808c1373c09236947":
    "https://img.pokemondb.net/sprites/home/normal/xatu.png",
  "0x0e4506664bbce3b7083b519454e99d6668dc956b9359f99bcd2f66ac1dd8e669":
    "https://img.pokemondb.net/sprites/home/normal/mareep.png",
  "0xfb8524a9aba045e9feee0281aff557e9a7e9a90eeaf53bd0ffce552c18053ae0":
    "https://img.pokemondb.net/sprites/home/normal/flaaffy.png",
  "0xfe3c1ae563a7238c6213e4f2291d00d7c64d9da889f698a5213ea0a4363b5b2b":
    "https://img.pokemondb.net/sprites/home/normal/ampharos.png",
  "0xec63d8e2684e372f338b34c857fe036d275a40d6ab6e5dcf0ef1f053e23ae8e5":
    "https://img.pokemondb.net/sprites/home/normal/bellossom.png",
  "0x8adc4a036fd938ca903422a0a0d0d986f4c3d918bd195615f9c9d745dc1fd269":
    "https://img.pokemondb.net/sprites/home/normal/marill.png",
  "0x1dab93f9671b049f8c5a887f823ffd3d69270b6352377a7af0f4c79f431665a1":
    "https://img.pokemondb.net/sprites/home/normal/azumarill.png",
  "0xcf46f0445131fa28d7f09020e1f666ec07772b09419f9e42e0171161c6abd80c":
    "https://img.pokemondb.net/sprites/home/normal/sudowoodo.png",
  "0x00c6bf2dc6d391f3eb28a53590cce0eebf863c521de113d27d708e90372a8bac":
    "https://img.pokemondb.net/sprites/home/normal/politoed.png",
  "0x1d5caee511a5d5aa853c23329079f5bb576f0cc7a698139ee8e28cf734e87a6a":
    "https://img.pokemondb.net/sprites/home/normal/hoppip.png",
  "0x769a0b5a6c3c3115af894beb3d17f78f5318c05bcfd606a617a67c68f3b6d9e3":
    "https://img.pokemondb.net/sprites/home/normal/skiploom.png",
  "0x9e41dc765383003f7f82dcc784f91ce4516b950a3224def9f3883b6bb9459117":
    "https://img.pokemondb.net/sprites/home/normal/jumpluff.png",
  "0x08931828dc58c249f819e85a8a157e4072bee69a6c1708f76e05c53c53d28b96":
    "https://img.pokemondb.net/sprites/home/normal/aipom.png",
  "0x02e5f6e0d1f896da0841a481fae1c72358a46d7c436ce4075881a43c011c7f25":
    "https://img.pokemondb.net/sprites/home/normal/sunkern.png",
  "0xd9f60f11a65192fc5c7769b8f50128ee490ccd0831d5ccdceacf7f4455b154b0":
    "https://img.pokemondb.net/sprites/home/normal/sunflora.png",
  "0x7ec2c667396d7348c4473e01a6312f169d7730c5cc7a783d4a997de24490e497":
    "https://img.pokemondb.net/sprites/home/normal/yanma.png",
  "0xafdda137543bdd82a6313865cd3efcb802b1c7e057c6e06c5b916e27210dacd0":
    "https://img.pokemondb.net/sprites/home/normal/wooper.png",
  "0x9eca34af14bd5e28f8cf6a067582b6eaee0b5269a8cc11c84fff587a7673614e":
    "https://img.pokemondb.net/sprites/home/normal/quagsire.png",
  "0xbc5358bb4483178531d8b7432792400e49fd7299641abbbdda7f46f074262776":
    "https://img.pokemondb.net/sprites/home/normal/espeon.png",
  "0xbcba8d56a5b96eb26eedc886a8bb37f3b783a4923371c5ae69638a9b7022a3eb":
    "https://img.pokemondb.net/sprites/home/normal/umbreon.png",
  "0x9079ca643690e2e3d3144cddf7bcbdba61749dcb806698b3b7d7d9cd48f40249":
    "https://img.pokemondb.net/sprites/home/normal/murkrow.png",
  "0x8d614b77fcb1bdf9e0b6c806d5b5828306a9ad23b3aef36e9e96513dc0decef2":
    "https://img.pokemondb.net/sprites/home/normal/slowking.png",
  "0xd147bbcf8b42f65bc4292ee60512d4f8d78f96da6c798bb00572a064dfe08959":
    "https://img.pokemondb.net/sprites/home/normal/misdreavus.png",
  "0xe4f1a0838ba2c58b743a5f178c77ac7e5adb580007d9499be801cc6ad98c6175":
    "https://img.pokemondb.net/sprites/home/normal/unown.png",
  "0xe979d41dd48b767e57575e55161553d4767316df1b8c7a5640385be48a0f7b03":
    "https://img.pokemondb.net/sprites/home/normal/wobbuffet.png",
  "0x43178d265f94df0782d5573f51faad48194d63612cdd9f6c2162d557e1b2a0d9":
    "https://img.pokemondb.net/sprites/home/normal/girafarig.png",
  "0x3bf4a4ee6cf549a49aa15a5d286a659eb70e085af96cd95a27887864ed132053":
    "https://img.pokemondb.net/sprites/home/normal/pineco.png",
  "0xec5c63b4bffb6000ae9a6a194d7787792ffcf1ad9ffbf8d08dc5773c91fa8208":
    "https://img.pokemondb.net/sprites/home/normal/forretress.png",
  "0xf1f8a86b60489e90fc1e85b062b6ab1f8a2109f9ed85c4d8bf1b87934c91610b":
    "https://img.pokemondb.net/sprites/home/normal/dunsparce.png",
  "0x4a9cef086e1fb8619c0c8085f9d18af5eadefb7bf967f12fc314c4318f39239e":
    "https://img.pokemondb.net/sprites/home/normal/gligar.png",
  "0xe92877d9c9fb33f712699d950bb579ec2d19a8532a3e5a98dfc383217265f9f8":
    "https://img.pokemondb.net/sprites/home/normal/steelix.png",
  "0x039c6b57baf67d1030b7c7971545cbf813fba8bae9e61dc4d7e2fee96cabb64f":
    "https://img.pokemondb.net/sprites/home/normal/snubbull.png",
  "0x25bff9f2b94143076f94d08b6e6b1b0ec1bf4fc6572f0d693182d5a80bd5aae1":
    "https://img.pokemondb.net/sprites/home/normal/granbull.png",
  "0xeef0a8081f2a806933c13ea60f66cf0af4df83f3108014e4ce0b593a42ac904e":
    "https://img.pokemondb.net/sprites/home/normal/qwilfish.png",
  "0x113aee094885bf862acc4ad9bd9ca6ab08c6ea622f96f1b1739661eec6411535":
    "https://img.pokemondb.net/sprites/home/normal/scizor.png",
  "0x4560c7e2527bdf1a7b7d91d1bf012aec2e2f190a6b07385fe26af4bf071fb3d3":
    "https://img.pokemondb.net/sprites/home/normal/shuckle.png",
  "0x6ce7e0d21e5c820ee934373ea7ec9b3fe2c4a125e9f8c7aaa99421dc3f8176bc":
    "https://img.pokemondb.net/sprites/home/normal/heracross.png",
  "0xdfc0d12ad0e74623b9c5ccff37cde9a6d277c62613c9b572d4609796b9b01a54":
    "https://img.pokemondb.net/sprites/home/normal/sneasel.png",
  "0xb9a0267fce02b97debcd01bae6c26abcca68c2b4ff158dcc556772ac6e166138":
    "https://img.pokemondb.net/sprites/home/normal/teddiursa.png",
  "0x8372450dfaee7344fd9500fefe30cc82605bbb051a354d03505c27e970512684":
    "https://img.pokemondb.net/sprites/home/normal/ursaring.png",
  "0x9e1e3dcc68cce809f94a4f28c4d81edf927327723865970b8b5d0f86e4026339":
    "https://img.pokemondb.net/sprites/home/normal/slugma.png",
  "0x72a33abadf5b656e26b901314fa452225a26764fb4e662c75a33f472535de3b0":
    "https://img.pokemondb.net/sprites/home/normal/magcargo.png",
  "0x6bb16abde8070a1837b3bf360f97d99b99d13c44a34a2716ed65054c3374eacd":
    "https://img.pokemondb.net/sprites/home/normal/swinub.png",
  "0x284f7ed0fecde68692b3dc7a56070985c5dd656bf64869e4aebe03d551992a33":
    "https://img.pokemondb.net/sprites/home/normal/piloswine.png",
  "0x5c157dc17fb21730e80494bc75fc619527b5605974e770a48c9ab17f9a33ce2e":
    "https://img.pokemondb.net/sprites/home/normal/corsola.png",
  "0x80bacca525c275ca1e07b7e9913885ea4398e47c7b0cb1031e0956ae9b1ff5d4":
    "https://img.pokemondb.net/sprites/home/normal/remoraid.png",
  "0x8306432f3de0d808743e925b9a909e19395df22b027ec637e8230e5ab4756a30":
    "https://img.pokemondb.net/sprites/home/normal/octillery.png",
  "0x7cf86560935be7524186fae99ce6c68a0bf674277cda4e8ae19a30dbe70b7051":
    "https://img.pokemondb.net/sprites/home/normal/delibird.png",
  "0x60301389ef3cac316e65d0358d43c6f4973c1a7e36672866d899e5325fe14824":
    "https://img.pokemondb.net/sprites/home/normal/mantine.png",
  "0x02705e7a3c9e9628f700b6d06ffac7d91893e6931131d9356649ed26c13bce95":
    "https://img.pokemondb.net/sprites/home/normal/skarmory.png",
  "0xd52bfd09af275aa4fb863dee051d2031fc8be5bef28b2078c85cd1242549a6ef":
    "https://img.pokemondb.net/sprites/home/normal/houndour.png",
  "0xb39cd65cd49601d25cb5b23043a6b32096b120f7883f12379b9f52ed47c47090":
    "https://img.pokemondb.net/sprites/home/normal/houndoom.png",
  "0x75f7691c47a49723499a2ad398a5458330633e5074bd27e66249db221857b30b":
    "https://img.pokemondb.net/sprites/home/normal/kingdra.png",
  "0x7800438d8846d629871536f7d73f83bf9a6fed148ac11a20434a0f5d18dd179e":
    "https://img.pokemondb.net/sprites/home/normal/phanpy.png",
  "0x14980941404ad214677481f866f2e7f425b6c58683152f1234581f8460647650":
    "https://img.pokemondb.net/sprites/home/normal/donphan.png",
  "0x88eb4acb0046b340b15472962a01c259c57e5ed8d417042dafef83cdce940192":
    "https://img.pokemondb.net/sprites/home/normal/porygon2.png",
  "0xf5827771e58d6089440e69db5b3db954c1b7f88f451d9dd2562906aa755526c2":
    "https://img.pokemondb.net/sprites/home/normal/stantler.png",
  "0x2ba6e182a657d4d3c275e815c89b57ce72a99917f916458a2d11c3e99b056107":
    "https://img.pokemondb.net/sprites/home/normal/smeargle.png",
  "0xd09bc3595de2101021c9c00aa4987b48566b802d22fcbe25417ac8e14a2aae4d":
    "https://img.pokemondb.net/sprites/home/normal/tyrogue.png",
  "0xbd88cfa5cb86915d53bfa4c2272c6b9a7c474f504c816bd2ea1e51605b13c2fd":
    "https://img.pokemondb.net/sprites/home/normal/hitmontop.png",
  "0xac347cf902d8a6d512e1ae3c7c56886d4d0790742ddc341fbe2fb9b25771a337":
    "https://img.pokemondb.net/sprites/home/normal/smoochum.png",
  "0x4a65cf29fff37ce102386f4d07aee9a08d12c154b92ff5a7fb93796bbf8d0d1b":
    "https://img.pokemondb.net/sprites/home/normal/elekid.png",
  "0x2ab545ccc3c6b54b23ab9f8d56e9998ca6e61ce1d88865eef55ff4120e5c62c2":
    "https://img.pokemondb.net/sprites/home/normal/magby.png",
  "0x79f69f4ad4e0beca9f9a9c4b3ec653167e9623462488cf9d1b21ff8b4eb3e552":
    "https://img.pokemondb.net/sprites/home/normal/miltank.png",
  "0x9d6356115ba1a714825ba0fac0643d59899abf2a1d5c93dc9ad04f68412e0353":
    "https://img.pokemondb.net/sprites/home/normal/blissey.png",
  "0xb627b0d39b75aedefdb07c1ebf3a6dfe18e8d91d3f9452fa9d6a854958e712e2":
    "https://img.pokemondb.net/sprites/home/normal/raikou.png",
  "0xa6c200d7abf2feab123823b4d125617497585c9a2c044d43e2d2901169391114":
    "https://img.pokemondb.net/sprites/home/normal/entei.png",
  "0x6da2dfdfab3afc7a8074dedcb332cfe3c96355de9890fada2c4d0f212aee34ae":
    "https://img.pokemondb.net/sprites/home/normal/suicune.png",
  "0xd46d92ab4b9406969498a72a2b5c991fb5db626528fb115fc07e24c9f0898400":
    "https://img.pokemondb.net/sprites/home/normal/larvitar.png",
  "0x6a3123c72bf18a0f001b1a18ef5d6d6afb894d3ad5a1b7bd973d5fe699a52b58":
    "https://img.pokemondb.net/sprites/home/normal/pupitar.png",
  "0x614779ddcc47463dc980b5e44255cf9d4c862bd0b62df958964080ebab0c1a9b":
    "https://img.pokemondb.net/sprites/home/normal/tyranitar.png",
  "0x026ead1febdf9abc8a3d0a39fb61b93163a1ef08ad95b587221ff6f50baa8a49":
    "https://img.pokemondb.net/sprites/home/normal/lugia.png",
  "0xd87e351cc99ea8753d63c84e89344d8a217b60dad41cd50ebb31324d4ea97d33":
    "https://img.pokemondb.net/sprites/home/normal/ho-oh.png",
  "0xfe820708b9e23fde5cf6d6244c2aa765cb641157dd49d1f3343279d8341bca73":
    "https://img.pokemondb.net/sprites/home/normal/celebi.png",
  "0xddb4e2c73b0963c622bd3eb5d44f1934292b5b0bda5cf14be91004077bd5e82e": 
    "https://img.pokemondb.net/sprites/home/normal/treecko.png"
  "0x815947493428aac822f41ac44385952b5750843e0d38959f82ad098a75420944": 
    "https://img.pokemondb.net/sprites/home/normal/grovyle.png",
  "0xa4d2a3f2e10eec51d3bbdd9b8c1ec554fb7aad05c2d9b46c8509872e19b452f5": 
    "https://img.pokemondb.net/sprites/home/normal/sceptile.png"
};

window.addEventListener("load", async () => {
  if (window.ethereum) {
    window.web3 = new Web3(ethereum);
    try {
      await ethereum.enable();
    } catch (error) {}
  } else if (window.web3) {
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }

  ethereum.on("accountsChanged", handleAccountsChanged);
  ethereum.on("networkChanged", handleNetworkChanged);

  getAccount();
  getEthscriptions();
});

document.getElementById("connectButton").addEventListener("click", function () {
  getAccount();
  getEthscriptions();
});

async function handleAccountsChanged(accounts) {
  if (accounts.length === 0) {
    document.getElementById("account").innerText = "";
  } else {
    getAccount();
    getEthscriptions();
  }
}

async function handleNetworkChanged(networkId) {
  getEthscriptions();
}

async function getAccount() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  document.getElementById("account").innerText = account;
}

async function getEthscriptions() {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];

  let page = 1;
  let ethscriptions = [];
  while (true) {
    const response = await fetch(
      `https://mainnet-api.ethscriptions.com/api/ethscriptions/owned_by/${account}?page=${page}&per_page=50`
    );
    const data = await response.json();

    if (data.length === 0) {
      break;
    }

    ethscriptions = ethscriptions.concat(
      data.filter((item) => hashes.includes(item.transaction_hash))
    );

    page++;
  }

  const ethscriptionsDiv = document.getElementById("ethscriptions");
  ethscriptionsDiv.innerHTML = "";
  for (let ethscription of ethscriptions) {
    const div = document.createElement("div");
    div.className = "ethscription";

    const imageUrl = imageUrls[ethscription.transaction_hash];
    if (imageUrl) {
      const img = document.createElement("img");
      img.src = imageUrl;
      div.appendChild(img);
    }

    div.innerHTML += `<div class='content'>${escapeHtml(
      ethscription.content_uri
    )}</div><div class='owner'>Current Owner: ${
      ethscription.current_owner
    }</div><div class='creator'>Creator: ${ethscription.creator}</div>`;

    const sendButton = document.createElement("button");
    sendButton.className = "send-button";
    sendButton.innerText = "Send Pokemon";
    sendButton.addEventListener("click", function () {
      const toAddress = div.querySelector(".wallet-address").value;
      sendTransaction(ethscription.transaction_hash, toAddress, div);
    });
    div.appendChild(sendButton);

    const inputBox = document.createElement("input");
    inputBox.className = "wallet-address";
    inputBox.placeholder = "Enter recipient's Ethereum address";
    div.appendChild(inputBox);

    ethscriptionsDiv.appendChild(div);
  }
}

function escapeHtml(html) {
  var text = document.createTextNode(html);
  var p = document.createElement("p");
  p.appendChild(text);
  return p.innerHTML;
}

async function sendTransaction(transactionHash, toAddress, ethscriptionDiv) {
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  const account = accounts[0];
  const transactionParameters = {
    from: account,
    to: toAddress,
    value: "0x0",
    data: transactionHash
  };

  const gasLimit = await window.web3.eth.estimateGas(transactionParameters);

  transactionParameters.gas = gasLimit;

  const sendButton = ethscriptionDiv.querySelector(".send-button");
  const inputBox = ethscriptionDiv.querySelector(".wallet-address");

  setLoadingButtonState(sendButton, true);

  window.web3.eth.sendTransaction(transactionParameters, function (
    err,
    txHash
  ) {
    if (!err) {
      document.getElementById("txHash").innerText =
        "Transaction Hash: " + txHash;

      window.web3.eth
        .once("transactionHash", function (hash) {
          ethscriptionDiv.remove();
        })
        .once("error", function (err) {
          console.error("There was an error sending the transaction", err);
        });
    } else {
      console.error("There was an error sending the transaction", err);
    }

    setLoadingButtonState(sendButton, false);
  });
}

function setLoadingButtonState(button, isLoading) {
  if (isLoading) {
    button.setAttribute("disabled", "true");
    button.innerHTML = "Sending...";
  } else {
    button.removeAttribute("disabled");
    button.innerHTML = "Send Pokemon";
  }
}
