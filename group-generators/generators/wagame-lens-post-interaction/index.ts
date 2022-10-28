import { Tags, ValueType, GroupWithData, AccountSource } from "topics/group";
import {
  GenerationContext,
  GenerationFrequency,
  GroupGenerator,
} from "topics/group-generator";

// Generated from factory.sismo.io

const generator: GroupGenerator = {
  generationFrequency: GenerationFrequency.Once,

  generate: async (context: GenerationContext): Promise<GroupWithData[]> => {
    return [
      {
        name: "wagame-lens-post-interaction",
        timestamp: context.timestamp,
        data: {
          "0x0014ea9bbe130c8af7f00c8e61fc07368bdaaf7d": "1",
          "0x012DB66110d211E5Aa15171b15265384f22Fd1De": "1",
          "0x0161d1cc10116bb2a073a0c293d5e4f1a97a00b6": "1",
          "0x01985690d95d15ab17f26bba1a466703ea4367b3": "1",
          "0x0206171cdd913fc2df3d1b084291f424ef680d94": "1",
          "0x035E8A0A57f24FD10D447c6cE44524513dd6e09C": "1",
          "0x03a534b6660fBD7aa289b5ca158c6EA78F353146": "1",
          "0x04aB5477E3fb72130163dE6DBE2517306ddD7ACD": "1",
          "0x0557D5aEEC6F2DBFFDc2a4CdCE59AE3286a2E896": "1",
          "0x057561523e7819d19d7690eca2ff05a138fc3b4f": "1",
          "0x0585c0d0aEdF071a07992ad650bdc047Cef0c04F": "1",
          "0x0614e07756390441cb246c886917487840e74f7d": "1",
          "0x06b58a6711983515181262fd0d943f73fcb767d3": "1",
          "0x07557e561e7baa14bc8ac7040271aa1443d566e9": "1",
          "0x0922b9c1c508fb2447d0fe60a84f47ea2a862ace": "1",
          "0x0A251dF99A88A20a93876205Fb7f5Faf2E85A481": "1",
          "0x0abd7685897af56c564fe09b88da19f603c854bf": "1",
          "0x0c0e611a29b339d8c1048f2edf9d4160a5fb8f22": "1",
          "0x0d95589874409ec85c1b3e0a384d2d3c291f9769": "1",
          "0x0ed26a54d83d0df3ebbbbf6aac003c9af6874870": "1",
          "0x0f1687c086e7565c96b395f484c42aad406e6c14": "1",
          "0x0f98490ed481611ae1945c62274a20480c8cdc40": "1",
          "0x0f9a22d05a1f5395505fb6df2b51ebe300b281e0": "1",
          "0x0ff33fe9bfd306b4973d94c5c02d43fd28fdcae3": "1",
          "0x100fF8DB91A8182e36498CBCb4cFBD8559918341": "1",
          "0x1138145b314e68e20Fb483BcBBCF515dA891344F": "1",
          "0x116fc0c386d05bc3bf33641f555216ef6e472005": "1",
          "0x11a3d6fedd7c5972e81e8ca4cbe382cdff58616c": "1",
          "0x11cbF10414152179D0DF09841C9645A434C3c405": "1",
          "0x1341df844780b66af4ccc98ae0f34be87eabe1d5": "1",
          "0x1342A24e50186F2F178FC57194D3eF56ec0f26fA": "1",
          "0x1425b6086bf32ee97edb36b5172612f54190fd26": "1",
          "0x1426fbd146942e153653863cbe633780c17268da": "1",
          "0x15c93595407279195D50b3CD09c8F3fBDe58D730": "1",
          "0x15CDaf4076E06485638cB83d26B074387090a2cF": "1",
          "0x17a7aaa564511583e67c0a85df4362745b2984bc": "1",
          "0x18d4c7f4ab36ade00403e0db619baceb860540b1": "1",
          "0x191ac84067db87283a1864e1c606e9d51c32f511": "1",
          "0x19a99970c80b9be16758e8d122d4c47d03e8b25b": "1",
          "0x1a523c2063de978b68a22bc03f8bf2780f585722": "1",
          "0x1cf7ecab394066df229a7527addd2cb3eee7bc80": "1",
          "0x1d3EB49f3E963F87B4f139902e1626D50b8672A0": "1",
          "0x1dBE192D69ab55C97D52dD642596111b9C415d73": "1",
          "0x1eD2eE9d1972f71FB737F5249040f1132Dd60D19": "1",
          "0x1Fc550e98aD3021e32C47A84019F77a0792c60B7": "1",
          "0x1ffB89Ab5C47838DD654152EBb10159045d39f76": "1",
          "0x2015Ff657D2bE663226c80Cf2AaF894224e9Cde8": "1",
          "0x211a26a3fc01b01b217b76c391902e42e3e1ee91": "1",
          "0x216e7a2afc7206a560b1cff735c148aa21df7eb9": "1",
          "0x21F7A7740fBD4F3A27e39156913E367be98Ecc75": "1",
          "0x223319356aCaD15ad55917969BD4F9a0B5172454": "1",
          "0x242c7f2279a3187279fd61605004a4b477b63a78": "1",
          "0x2531dac8784cc16b0f1047c5fb97a4a629c44566": "1",
          "0x26115783a13bb5029af1dd44d892fa70a2380a59": "1",
          "0x268703Ed376f7Ef210bBa3A8C4bc7B75AD63C630": "1",
          "0x27e32Ef9576dc05F4D08d978106fC16351d4cb0c": "1",
          "0x27f89AF615b3A83301B5Fba519504e7c60950A11": "1",
          "0x2856cf9905d923469bb749e9787fc953b0a321e8": "1",
          "0x288492d9b0295882c211b1633d0d48313d3466e1": "1",
          "0x28b8ffcd234dd0807f49107be36665f540f9fbb8": "1",
          "0x29affe4dc4302df67c3a15ca6cbd2c02ac2aaac9": "1",
          "0x2b6C44CDd2BdCE31e5b9d49D2A1e726CAfbffd53": "1",
          "0x2Bb302959a0a394f13962C2c452a2F766614c241": "1",
          "0x2bffa4b20253c8644bf0c9f1ab737ea398ea5298": "1",
          "0x2c39C02c2FAf069E9348Ea7C319f3F017e721cD2": "1",
          "0x2cb9c829D2F7Dab6769B1207328D0441C6A8727D": "1",
          "0x2E00d3286a1Ee68C486F77a89392AF7Bc851FD0A": "1",
          "0x2E37Cc15419C463429ec757bB31221818d9C739d": "1",
          "0x2ef2284a784c1fa06f95919fab978e87da18bc66": "1",
          "0x2f38382c8b5815c5e05e5a756888790650fd7d04": "1",
          "0x2fa5896a6a70ffcc9efad1b0b1d41c705af807b2": "1",
          "0x303cD760680d2a6B474665e8Cf7e99f32D6337dc": "1",
          "0x30c1fd89217ddb02ee8547c419edcb6042404bd1": "1",
          "0x331a4DBDE212A69c90aC56638693530f7C8e5413": "1",
          "0x33482803274C5e08661843636DceE8E9A68c7252": "1",
          "0x33dfba48f77f4dff1b69532b523ebb076da3c33c": "1",
          "0x3426648b4cccb33a7df81d69993b71ef5e7207d7": "1",
          "0x343c4bcca43fe11cf901e5e6a4546a93300f6481": "1",
          "0x343cC3d8480ec2Bd0591adB71d858FC4A9CE1a65": "1",
          "0x347Bb83E4ab465C8C6b7afaB3BEB373410A9Cae2": "1",
          "0x34f099c29c45ee4ae55bc219e019dc1136431995": "1",
          "0x354d4D759c49094f60D537bfD7177c05b70c20cC": "1",
          "0x356b18c8e5e018Ed1fD86F0E13aE62723A415ad8": "1",
          "0x35bf86acf90305453edc312ba6a4721c878249ef": "1",
          "0x3623B1b5C21F3DaeAE4cC01549e20A6DF5Ea4118": "1",
          "0x364F4B2eEe8920b6E476Dfd4e531B6fd6bfC14Cf": "1",
          "0x36e67bc4d8338582a56750c61bd38174361684d1": "1",
          "0x36fef7f36705169816e44ff1070ac3f6ad796bf6": "1",
          "0x3788d87d965da2bfd2639bf6c277f8a13706dcad": "1",
          "0x3978e8bc84e478cb2cb98544f9e2e6bafac7cc66": "1",
          "0x3985F56d313651FC262b49c393D1050058888888": "1",
          "0x39d46c9e1182c1868b75190063c0801a41df40bf": "1",
          "0x3ab8c2c27a9c1a0b396758a77719e361b87240d6": "1",
          "0x3BC9260000358460b7b761406ac40b7677A1F359": "1",
          "0x3bD672eC3D56e4A87A1A0D43Cf2a84c8664E3869": "1",
          "0x3BefE86Ed4E6e306C93d37B44ee83A846F784776": "1",
          "0x3c37c077873de795ee24dc22f02c7bf9dfc039c3": "1",
          "0x3c7d0a29946b4ce81ffeb6521fadc30f8fb807fc": "1",
          "0x3d021b49a7ba111fbf1083d6133e19fb56ca8028": "1",
          "0x3e51C2F221d97ebb6b24f75b7C62fE59B5Cdb2B0": "1",
          "0x3e6e1cabb367b917382b67ca0e9dc7b368b37734": "1",
          "0x3ffe5433b896ae09c489e9c5949764c3c6719ee9": "1",
          "0x40Db8365d1252bcb06598927698238a99D39228E": "1",
          "0x41477A57A8916237A8ff512bA3D9bF487D9cbb79": "1",
          "0x43930Ff04D18a5B59805151c1Eb403C55870641E": "1",
          "0x43D16CCd581E1D6A8d51768f75DdF09b79F4f856": "1",
          "0x43D5a1852ff45A3d962D325E7d08c33960bbb2AF": "1",
          "0x443a7308ce91071d32e4a95389f2d1b4cd7d5b05": "1",
          "0x45a1FE688c01CCfd4606aC31D1F7b10FE2aa875e": "1",
          "0x46b830bf2c258f5a7db64eb9a96706a91132715e": "1",
          "0x470c4462C67a3FaB03901B81C0B96909F8330Ca6": "1",
          "0x48b6e30B0a455973D98534A7EFae6FA014Fd6135": "1",
          "0x492527D3553C9385a7E9734E0D93a2c33f80E9A0": "1",
          "0x494e89061De0133626EacAFF7c1F0A4EF611d132": "1",
          "0x49d2db5f6c17a5a2894f52125048aaa988850009": "1",
          "0x49F2147E1B1D5bB8C928A6ff354a4CfEA025D5b4": "1",
          "0x4a04b76f5ac446541a8d10b776b52947fa8bc6e8": "1",
          "0x4A5da2a1D3258dF8FFb431Cf0110FE9b98ADeEbf": "1",
          "0x4ba245c3d3ee8509e7470fa86ef921ad4a8fcd58": "1",
          "0x4BD7022723F3D4d7Db2B7dB49B839125DA1ef639": "1",
          "0x4d3877abc39d131a39ce21dd0675ad3c1e3f3f32": "1",
          "0x4d67c5beeb6f864e8612073f53a0829d1ee16393": "1",
          "0x4e342f8988fd2668059b3fdf4729f01c1a2d6972": "1",
          "0x4fd556e95f3901e11a63f8d49d35a12db577ed4b": "1",
          "0x50B959F0EFef675750bd3a95f8fa5A5eC70dd37B": "1",
          "0x50e154ad82b3d9bfcfba58e4a6f45438e1f69cda": "1",
          "0x5142811712c04a645C69d1725E5C38291F080537": "1",
          "0x5217027ff9a838b79a63a93c14f03a534760da34": "1",
          "0x52f0d610518df0cb6a4830f0f2f609c327b15290": "1",
          "0x531a50b437725CA67A8AeE30065370453Db09334": "1",
          "0x53282b2115231e0011cb1d68b54686ce7ee795ed": "1",
          "0x534619104a9248b55a0293bf32e64ef939d8b5d0": "1",
          "0x536733e40e7cd71c64267bc7d14e1b7d2e7cd158": "1",
          "0x545425f9686b56078da3bfac5f9f25bb287b1291": "1",
          "0x55439f0d6FA55BBA46F54FBed95a3510706c8C75": "1",
          "0x5571Fe9F44EddA5d55Da966543F04A846dE5738e": "1",
          "0x55DD7D8Db617E34c37b43DB2e1Ef154e2558c6Df": "1",
          "0x56c11b5199a8c93dd09f96f92c9445de25401114": "1",
          "0x57c4c3d9c0505f8199441da67e521a243588f428": "1",
          "0x57d21b9e9d1d4526466cf1c78758b386f00dbd0c": "1",
          "0x58576565f2a570C0432878b1642b3df4ce9B8356": "1",
          "0x58B78C9BFa0363dF10850afFDfa220137cA25BdC": "1",
          "0x59072b3a3287f4a75cadfb36d671a2f0d1959b09": "1",
          "0x5985745cD986b724925Cf71a8931D755f33B2EFC": "1",
          "0x5a20D2477401d87dF1884506D49F9d21316d0Bb9": "1",
          "0x5A41CC0daD5c3F69123c7234b10ba1a7bC25Bc84": "1",
          "0x5A49EaC6048c90F3747Bef4058D3314B0c2dE6fe": "1",
          "0x5b8082dcd61b91cb9c0979dfe428537e7104a590": "1",
          "0x5b933bb8f7dcb0a320267b523473698ad632763d": "1",
          "0x5c38cD2703819E288662fef1A3005D4D3B62E415": "1",
          "0x5c3fa65c3eb57f83c67f947321ac5969e72ed44d": "1",
          "0x5c447b0c3e10cfeCE7Fbf2A52b2c16Bfe5025760": "1",
          "0x5cfe3a15c0f55b8c087d5063258a49e20784de8e": "1",
          "0x5d2b6a03721Ec823015EccE31e8173Ef40cbD369": "1",
          "0x5D50cA0a21F434E9F3f8110e1980005111D1B93b": "1",
          "0x5dca7bad26550b04a2d6911ba64bb7e7bdd67787": "1",
          "0x5e95b00EB048bA226e37f5FcBaB2eBd8B530C83b": "1",
          "0x5f0E257991471C4C0229D3926aDcf73fCb67446D": "1",
          "0x5fa18f60c6e4a08493abd3a4da7b02e20b0cb2f9": "1",
          "0x60dd456273cbb018c2222621d4c2dc5016e870d3": "1",
          "0x6196781123ad8090978ff576e3d0b91c4d3a631f": "1",
          "0x61F3Be073bD5c5A6Ed11443E51744Ce505E27B85": "1",
          "0x621dde05992b0b3a6969c233bb5a580f13dc3f42": "1",
          "0x62A502FBCc198C408cFc603f342D13FaF82193fe": "1",
          "0x639080206ABF76e448F63C8420Ef5617655D8301": "1",
          "0x63a370abfc8ed6132025f6dc8244ddf6205c174b": "1",
          "0x64420F2f54B798A58Bb8D0f373C6e75f33cd4408": "1",
          "0x64be14c31561748568c86368ff447c375169abaf": "1",
          "0x64ec5735042a77668e101b9dc70a5db96267a3e6": "1",
          "0x658191594cda88744d8158813029420dcf137a32": "1",
          "0x6582182f7e8db0d24b546ddf26e855179cd1d5fb": "1",
          "0x65ab2af69d1d7c96b12e527584e5d457b57206b5": "1",
          "0x6727a88876b8dd72Ce41Fc982c19683037578938": "1",
          "0x6765f946700549F784103D65001401B70ecfa588": "1",
          "0x67Ee5213155DD584aBb876B737E3ba9aA1f150f3": "1",
          "0x68aaD5A5CFD7f899b90CeFb38451463a1cE4f883": "1",
          "0x69389398e4D903b02010e20d308ee58EA8D6D714": "1",
          "0x6a0d579b887f17c49e39bf66016024719ac6f35a": "1",
          "0x6Af39B025c2a1B91118d0f8014FcF6055290a5D7": "1",
          "0x6bB3B767FeAA831E600Ac884fA89e264dE543C1e": "1",
          "0x6bcb45af1ecf290ae8c74d86b72cdfd3321ced2e": "1",
          "0x6bcFe7307663bB2B0C1c70294c8aF1ea01fEF0De": "1",
          "0x6cfa99b2352163d70bd52de24cdbf553374b9335": "1",
          "0x6eda5acaff7f5964e1ecc3fd61c62570c186ca0c": "1",
          "0x7029bfa9A85Ebf4653945Be520dC3b7F1181F4aF": "1",
          "0x7048b265e9ba8d92bbf74f4fee0eedfbbe6426b8": "1",
          "0x70635102CF3B7D32FE0a1221b412Cb4b172A2b2f": "1",
          "0x7085c2ae0eD9966E5e2acE4187CE7214F2B7901a": "1",
          "0x716722c80757fff31da3f3c392a1736b7cfa3a3e": "1",
          "0x71a61084d15f5471ad396f8648f908eae404a5fe": "1",
          "0x72ff31CE9F3933e6aD7E85fB77f13aB28dF09149": "1",
          "0x73b973dd4e432575eb85dcc0dff20a615c8e84d2": "1",
          "0x73e447115c812974aa0233a9d57d58c514127aa9": "1",
          "0x73F4A1e1B594c879A7d20D2ff96cF4C03e9FC47F": "1",
          "0x75f6f5e6df1e0e4f3630b3aca77643f3531a2e31": "1",
          "0x76ce075e6CcB713099dEe965F4124fb204c741ab": "1",
          "0x77259366bA576CB32c3cCaa211192d276352E3AD": "1",
          "0x775560bb89540337d66fa10193403822cc68669f": "1",
          "0x779b10Cc89240637b2cf8c21567627a31c8a3E7f": "1",
          "0x77a8D74819702D7AdCe0C884C08c3CAD14300605": "1",
          "0x77f9a22455916246551b6f5182f4ffa61f245961": "1",
          "0x783578b0c86fc28b63e455b06153bbbf70e6075d": "1",
          "0x791334E696e3536b7b77c048916120eFC18FC056": "1",
          "0x79603115df2ba00659adc63192325cf104ca529c": "1",
          "0x79bdda65c706cbda69c0ad4c8da1d3e91724f48d": "1",
          "0x79e0b397026679daac5896aaf4cbd6a1a23f6bd2": "1",
          "0x79f464aa9979e80a437990a77e3406ed8c2d5380": "1",
          "0x7a6CbD7A4562021FBdc0aC328c6C572Fd703087a": "1",
          "0x7abebb5cA2E9d5dDA81fa4b20D6Bd3362f8e7071": "1",
          "0x7b86b43cc1e2d568398ceed8fc74338dc9f9d193": "1",
          "0x7bb332FdE4Afb7F7e44024b0fF25E15b0264dE42": "1",
          "0x7Bb8Ea864d4733E9c1145bb8c25A117bA8d92680": "1",
          "0x7c84bf06d5a2d5d7f5d08045340334c73ac0ee59": "1",
          "0x7cd8431c6cf37b392944b47f0bff0eb2abb6df82": "1",
          "0x7cE3E1539bB9A2BB75fd3e4069718E3216cf55b8": "1",
          "0x7cfe310b31c71c45a8141326cb73f7e248a42bd1": "1",
          "0x7d4e2cebbf9702b000a72a8f3614addcf5389c21": "1",
          "0x7d84b7fa779c86922E46D1C1B18f61A41f3b9799": "1",
          "0x7df6f330939b927cbbe10209f136cecf4e64b7ef": "1",
          "0x7f0408bc8dfe90c09072d8ccf3a1c544737bcdb6": "1",
          "0x7f39507236697a209B4bc7A2aEdf93298B17c88e": "1",
          "0x7F7ed74ba8d347640a0a4150751879eFA6a5c8CF": "1",
          "0x7fe8E1Fc90f6a49E0528574feEeeeeEd5ccB3168": "1",
          "0x7ff7c8a4B74a5dA6e8d1a8d1991d9a8CBd6C4335": "1",
          "0x806346b423ddb4727c1f5dc718886430aa7ce9cf": "1",
          "0x80A799e1281Db08AB4E2a486Df02ef327b92A2dc": "1",
          "0x81ed4d26a404efeae5f24ccb49a6d0ad9966862f": "1",
          "0x829BBC1F94eE2fA7856e17Bb7aB2B8FdA6F3BD53": "1",
          "0x8330a84d3c16a55302f921c36979b1067418053a": "1",
          "0x8365a6aa2145bf169a7033698ed65ea63ddd1730": "1",
          "0x83bbe9cfcc205bb8e53cba0b51d6db9386ce58b5": "1",
          "0x84044522aFb2497E60a9Cb0Aa34692A0852B953d": "1",
          "0x841AD0AbAb2D33520ca236A2F5D8b038adDc12BA": "1",
          "0x84a6bdd0050f1ead7a842334c8cb07253f252d6b": "1",
          "0x85332be5e648e37a6470e0e7cbf73df41852c7d6": "1",
          "0x85eFe1f49dd371a9132739Ef578D8F155cD518D2": "1",
          "0x8624d360208ebd9a336a698a353794d219bcf935": "1",
          "0x86435291f99CA190A6b1F95cE0A2b3579f128adc": "1",
          "0x869139316d79117003d69bd41deaeca22ea6ce18": "1",
          "0x87b2711074cb1d3ce1f1cb7a46db2f4e9a84ee6f": "1",
          "0x88B0BE658E72C5518B37cE0A5625D3fD494dBAFA": "1",
          "0x88e1cbd697a5f83397a628cbe78039207af6e80e": "1",
          "0x8902cb89e6f9cbeae9201b123b43f2ef4eebb7fe": "1",
          "0x899B2d61a5943Dd2452cbc9Ff5d158c63a2275dd": "1",
          "0x8a4a50B13Fd2cb36FeB96c408CB98B4c9F2b8F25": "1",
          "0x8C38800f665a6D0e9f0Dbd6FD0dd989307fCf5d5": "1",
          "0x8cbf96319b3c56d50a7c82efb6d3c46bd6f889ba": "1",
          "0x8d5ba014b9341d7736ff3cac0e4edc6785a9a29a": "1",
          "0x8D93c5E1e4439f91FBd21ceedDFEdC1D38410424": "1",
          "0x8e3eeaa5c95273c43bad8ff95569bd0732296acd": "1",
          "0x8Eb444F8495E4038B97C6cDB13091d64597C8d1F": "1",
          "0x8f296196D7504A789584f38Bb9A111a8FAD6a81E": "1",
          "0x8fabb4f765d69a37074aa30d550bc5f64351f1a6": "1",
          "0x90038689FF0D656EF3a9D4b70CD614E845514736": "1",
          "0x91620d52ccecc91c190872a6ce46c04877b9ae06": "1",
          "0x91a0CaCb38470B50E3117F114762F605C06A1c08": "1",
          "0x92c848560842e1b9CC2DEBE0E6d7DBCe55297d65": "1",
          "0x948cd77f461189731071C2B3d5285f2E3115Ebe0": "1",
          "0x949aD06a4c904cd0B31AE2F56AaE0eC68C16CCAc": "1",
          "0x952580D41f10dB41d97fcd6B1984bC2538eEFC2c": "1",
          "0x953c3AaCfCED93B7985215F9E0A09089Cf21c894": "1",
          "0x95a24d2027b4874cc47fd258bd8ff79905d0daaa": "1",
          "0x95A26e0eDF7b461E597CC7F15f6f2cCC3e0bb0c5": "1",
          "0x95b0cb330519db2bcaf74b90c1bde3d62f673718": "1",
          "0x968e784f1fb1bd951c1b07dace40554edbc60e11": "1",
          "0x969E2CDbEd527117A00349e0eC352CF7967284E3": "1",
          "0x96B202A8b7fa0067B731B087a7E2b32048239Ef2": "1",
          "0x97219Ef57A528c1f28A07A8c028b13C25464AEA9": "1",
          "0x97f22bb02af2b87f140a7f934731e15030ffb916": "1",
          "0x981cC27BD476Fc300A28270555C7BEbF09efBCFF": "1",
          "0x98479e6d18580052e1ed593d5fb2f3353c10f10a": "1",
          "0x991Cbbe17fA50F11A840070Fb9103C039c25Efc1": "1",
          "0x999a695a4bC44A82796C4333129e2a0217D4aC94": "1",
          "0x99D305dfc38CEfA91cB1129387681eDe4c93e87D": "1",
          "0x9b40e3627cb5911F6f52eF534c7EFe2ff60a152F": "1",
          "0x9b8753ac5a975708a654d16f7a1c1fc9a7b98828": "1",
          "0x9b8ba8c519cb207bcbeb73c5dae3918a95bc238f": "1",
          "0x9bb1627bf787f1b01b12d086dbc1af5bd8811682": "1",
          "0x9BCD816E3A046D03256f2c351b6B2336F82533eA": "1",
          "0x9beeDF83CF0b2740303784793F719Cd75161b512": "1",
          "0x9c3ac02cd616a82c83830e40d45c9534b32c4934": "1",
          "0x9c628Eb38415809589Dd087dbC4Bb7B3e8416c03": "1",
          "0x9C85C376A50721c75E4E015AC22EfE066dbB73EC": "1",
          "0x9cda4188918896c41dd7277fe3d969b7a79285da": "1",
          "0x9cf4c1fa6a86c17fa555c0341b668950cbec6524": "1",
          "0x9d23DE5540A3a1dFbF24D391A9427b2BE3797C8c": "1",
          "0x9e0bba8e7e9194476f1b3d329ae7f988f580da3a": "1",
          "0x9E73201903164d3B476505f3C54F86cdCD4010DF": "1",
          "0x9ec8bf391107e322eafed376b39d7f6cdd19c3a5": "1",
          "0x9fD9Bb687696f19038892989876Bd6dC96Abd769": "1",
          "0xa1aDf3ddA8D7F62Cbab65A86926ba46Ac265cF2e": "1",
          "0xa27b3c18892d2e2fb9991d01d9179dd06f3200b4": "1",
          "0xa2e7002e0ffc42e4228292d67c13a81fdd191870": "1",
          "0xa317098d0ac484b87fc8cd7e651709af4c4c7266": "1",
          "0xa3766Fd7e36963C7c47ef8d70a601456Ccb6d19d": "1",
          "0xa3bce8c3c75b290e420130369df037c477d34a45": "1",
          "0xA45B96a195cd8188a0A485E8950D10B6B410B685": "1",
          "0xA515F7fB260095eebC860425493b8761B4FC9abd": "1",
          "0xA5b2F6B98F45f191cD1bAd7BB87A6cAF98Ce66e1": "1",
          "0xa63fdb9EA2A842cEae394e0641aFD667DE087B76": "1",
          "0xa6583617bab73f18d1db30a5aa4ebe4da4af581b": "1",
          "0xa662da4071c358206937c8442d0587dca92cb06d": "1",
          "0xA78c96883722fb98c06BE4635C890bd5CC6f7144": "1",
          "0xa8441e7e89978Bde6C2164Ee930B885251B3f26f": "1",
          "0xa88595dc697b73f23b8c4fdd045ecf377059f197": "1",
          "0xA8c4e3ce1743D0f2A6c227548C982a7C40569940": "1",
          "0xa8ce3a37c0994e9cf674e7c0fe7984f711ab9128": "1",
          "0xa90bc0981fcf35aadce00fc3bc5b3b8d754c0242": "1",
          "0xA9229226404C94566e42099223fD0FBfd3183903": "1",
          "0xA9F96801Bc931a095363693B37EFD3f98adC1584": "1",
          "0xAA312EB19552F924dfC47bFefE47F35A902fC595": "1",
          "0xab0986908af369335a8f7e9b4c3c75d7a5844951": "1",
          "0xAC304C68737A133068230f0537B3E58c51E9dA30": "1",
          "0xaC70c04Bbbe065790814859341F8415E84C4987B": "1",
          "0xad32bbf7bba3e6dfbb138e1a597ecbb038f6ac0a": "1",
          "0xade1da83006625336fa129b3be12413737b04df7": "1",
          "0xaE695C74F730817679eFDC484664FeA724b9D186": "1",
          "0xaFeA25cAB23B573cAAc4679806AE9290A8d9Fb7e": "1",
          "0xb001373b6f8d09af6560fb689aa5f3463f9709e1": "1",
          "0xb001e1bc4b8b8e0de0f476cbae23adc2b0d3d30d": "1",
          "0xb0C0f73f84CE7355E755846C123f0a5848304B52": "1",
          "0xB164643d26079F3b1dD194b5Ef95EE8cE1d5684B": "1",
          "0xb1aa76854d665dc45168d02d3e32b2e19d7e5b22": "1",
          "0xb25024c421d4f8bebe468d3dc353e07868c99901": "1",
          "0xb2f706c05b8fBE96aD6dcD6cD47376C3b919A5c1": "1",
          "0xb3313b023e68CdA95d7B625200e1B0fE6335A0c2": "1",
          "0xb36f53426ded5798befe1ce53bd4600811a5eba1": "1",
          "0xB38D29B30D0DC0A642b122E8A0Ab394514EBbA53": "1",
          "0xB489D201745bBDe6207bd513c496c8Fb64dcE6eC": "1",
          "0xb4bB4a094338BC566e4bb0355C9de525f7C1F1b4": "1",
          "0xb4fC9a7B8be45c14b6A7364667069544eA4cbDE0": "1",
          "0xb52e85d8962b874088e4ff146b1e8e46d7422a35": "1",
          "0xB54E76FDb9FA90876DAB66A4Df16c717c53bED36": "1",
          "0xB62dD3Fed834f95A91aE604EF626e4B430e6c9cB": "1",
          "0xB67bb52ED517E3360678EE1B820e80DCFd803d44": "1",
          "0xb935F90aB7Be3b132eEaAC137ac26c2D38C7B55A": "1",
          "0xb93ddcd31a64d79fecd0f2dda3accc451fafbed7": "1",
          "0xb94b4220265419cd8279706b23df25036862D1f8": "1",
          "0xb9f6BFd148E5602369Bc3f746c900eFd6089dDc0": "1",
          "0xba0e13b23b2d5fd5cb80544a34345fd370151179": "1",
          "0xbA12110198F2127EB1C724ccF7f38af4468b7C1e": "1",
          "0xbb4d885fd41c807e8ecc2dd9e6295a7f96adb0eb": "1",
          "0xBb509e552927B934997777272Dfe08f29Cef3Bc2": "1",
          "0xBC1159Fcaa1Ac43E9A12D3F9e3FbE32B9A676701": "1",
          "0xBC867925072a208b4Cf9C6Cdd4D7A0e5D930E254": "1",
          "0xBD7840674e23C28c74bAbA14Ff839B5adC5C0d79": "1",
          "0xbdB1AE80B5Fe5986f48D7A9e221d8Cd21D659465": "1",
          "0xc03edbf9b3fc06fc48dc482bdabd4282f70fd2cf": "1",
          "0xc0e93e7c4f9706acf47ce3fa96567240b28a33c0": "1",
          "0xc0ec71dccacad31b277b7d943db5662e23d392dd": "1",
          "0xc1d9af01a545c03b7ebf3e8bd72837c853b7f4a8": "1",
          "0xc32b7438b3df7844c9ee799930a2224fe6e26426": "1",
          "0xc33B0e2Cf4866C37366403280E0d3f4a0aCCC351": "1",
          "0xc38133ee8c0b5b477a302521c38a25159f2c9e16": "1",
          "0xC49727AA883b4F56213299696e6e7c77bDDc8d37": "1",
          "0xC5919FaC681Aac950cd3124BA27E690027320c9b": "1",
          "0xc64284527b04a48c6673df62f5b48188ccfdf658": "1",
          "0xc7Fb6589477f0f90c3BB3cDf97b9daC4CA40c19f": "1",
          "0xC8B02Bd12705F1CF4eE78dAE82557919c8733dc4": "1",
          "0xCAA713508eD800c75808ad51f035881Fb422a9E1": "1",
          "0xcac6a89df9b0507d84fe57f802bc6d929f96d802": "1",
          "0xcb15649d7b7a1eb01fb1acd14809de6cf82aa1a0": "1",
          "0xCB53a818042Db647cb01672751B0E4efCa29cF55": "1",
          "0xcC6a62a09289D3506aF923210FA62b9C2Fe6927B": "1",
          "0xccbb3f863abd41fb4c1034c67a3efd9031bd02bf": "1",
          "0xcce5de39331bb3e86683536a59bf464e16f134bb": "1",
          "0xcd0b67a61e5e8f4616c19e421e929813b6d947df": "1",
          "0xcdbf86fe9d7e4e03995bdfcaef426aada751cf46": "1",
          "0xce694d828b240fb6d2c58fff09f03196513308a1": "1",
          "0xcf5c8024881f06fc987e9e3f9757b87a68ee3c34": "1",
          "0xd04bf1c800f5a7fb380de6871d0dcea421d57c64": "1",
          "0xd0793c144c7e09c3d7e0da7a8384c31d0577f838": "1",
          "0xd0cc08ac12cdbad1fd89cd81565854a647be20e9": "1",
          "0xd132a0b989aa85b913cabd30583663289b9e29a5": "1",
          "0xd1feccf6881970105dfb2b654054174007f0e07e": "1",
          "0xd20c0ed5b221f2ce5edB4f63dCe8aC9B6F6243C5": "1",
          "0xd21532285Da50F9eA8cFf4eb4319d13476bF63e0": "1",
          "0xd26b76e50f6510cdd4bf45d59279705f36946d23": "1",
          "0xd2bf01037ad3310723eabc9f241e20862ff7d7f6": "1",
          "0xd469Ce76ca266dC2B84B2782A1879e6E0743492d": "1",
          "0xd580A34f5d6c8f61C853452331a5Cf7d8B27eCFA": "1",
          "0xd658fec7bee783d4e1e6d08185dd7785975d0d44": "1",
          "0xd70a9dcd0753dd7ad9cc49d434b91659a6165512": "1",
          "0xd9264b7d4b102db537f6ce4aa3a383c323b0867c": "1",
          "0xd984378eb2350b9dea3abacf6f3e924573e6ff9d": "1",
          "0xDaa22B54AA15180A4AF68712ac7EFaa5578AC81C": "1",
          "0xdbfE5E94a0208C5324c7E4396DceBD312AF01B33": "1",
          "0xdc3d9da5385b996e9d35ad6b9a16964a1d9c6d48": "1",
          "0xdc4471ee9dfca619ac5465fde7cf2634253a9dc6": "1",
          "0xDc7268b9e86872259b6768E1970220cB9Aa260c9": "1",
          "0xdcdb53e8e1123baa64a0b7d3da13e360ca843797": "1",
          "0xdf3a4ace385e43ffd4c82de68deac3cedcc7e58d": "1",
          "0xdfADB8B2c4Ac394051D901E427Cc1588DfaF73f4": "1",
          "0xe0965304a7680ef8eD5afCd84828978d45DEdC89": "1",
          "0xe1aD8eE5cA710DAc45D390B43CAeC64188072e00": "1",
          "0xe1ce2d9846806095ba7f866736de0445756f512a": "1",
          "0xe2894fd6ca974d7d248010ac0fa98eaa27ed790a": "1",
          "0xe2dcfb3621fd1970b4289f1f8251c6d1efb9d0af": "1",
          "0xE3A3B650d98fCFa78EA2669b28Ed8884d4D37C78": "1",
          "0xe3a4e9d3172232e369e76f9a231fbbe18267b725": "1",
          "0xe3D871d389BF78c091E29deCe83200E9d6B2B0C2": "1",
          "0xe3e09d41a30603a68f7a6b548d87c394f63ffb27": "1",
          "0xE4858769dA34B4ad54dAe96549EBD3eA45762f78": "1",
          "0xE487396fE3B10c67d5293a6cDb5e2CB2F504cA85": "1",
          "0xe48fE6012f97b6A13C0Ce5cEF314cAF66E972deB": "1",
          "0xE4983A9f2411824820409F36F023A69ED0999D58": "1",
          "0xe63757e3cd485c9b35b3a972fffa2d91b8649483": "1",
          "0xE6C55b0Af75151960005eabAE3fe19528C1B131B": "1",
          "0xE7700302857098DeE95F4e7254f5aaBf223e9CB6": "1",
          "0xE807AE50E718efF5651515B9Dfa2bC4eeB2cc36a": "1",
          "0xe860534f225ef4e66626ce41d8a3ed13ab291371": "1",
          "0xe8a111ebAD31ee75f51F38f734124b7Ebe38E034": "1",
          "0xE8cD1710D34fbe9606c89c683Ecc5091E6Ab9F20": "1",
          "0xe99D54ac5eBc112e96F75b57Bbe861657E617E54": "1",
          "0xEA94f6c323A4a8d832a1fF6D1a930899A42aDc5c": "1",
          "0xEBCd250474C27cBaD3C56f3F34e08F97b370AC2d": "1",
          "0xECe1D8CC9e4239978B0a4fd757Cac180b73A94aB": "1",
          "0xEd7384e3Ea8d85A60e8677fdFd00cCB1df4Ed739": "1",
          "0xed9f468d8c9e4deb4095ebf85c45949a3c79b357": "1",
          "0xef011a45D2C735578E38b62D4e982CF963743178": "1",
          "0xef0e5397469233bb52178ddac48e4637bb5002cb": "1",
          "0xefcb24fc58cf3e75287fa6345806481a171b95a6": "1",
          "0xF1Ea4eAEa0f6B0A12a4795B5e857EcDa6dae21C6": "1",
          "0xF253d5552906d139e8C1a1bD59133bd895975094": "1",
          "0xf25c46Df63eC626081E4dC3ec1932E4E329817dC": "1",
          "0xF26f5f7a8DE089fAc84641aDC6529782e686ade9": "1",
          "0xf2f3d01b47c21a2339f3a508531da76a9380dcd7": "1",
          "0xf330db6a0aa6489c5e05246ec0cecb84d6002c28": "1",
          "0xF4753b05f81a52ef21576e1aa9BcB3b6A89D66CA": "1",
          "0xf4DA78F9C20827bb8C9B9992851790a121a1F04B": "1",
          "0xf54ec034555fd6bd9b0161d13e6608b7591b0ee5": "1",
          "0xF606325Db0f1b4cf96b0D74Ae263F3e2d6dcF55a": "1",
          "0xf64eDB06673EB5be70953BD1ab473b5143B08302": "1",
          "0xf67BbEaC09D3AE6e7ce3844AD1897D267038b3C2": "1",
          "0xf6bc417be86d8fd506c216c33c6fcb4b720c3438": "1",
          "0xF75448fdA3476606B64a97e024517D0fdDCBa80C": "1",
          "0xf774cf9388178479203c07404537ded2655ab9a6": "1",
          "0xf80c0753036c2d3ac7759389f80af3ed3612c569": "1",
          "0xF8123F7dCD2e78B3C6f9A072176aDa1FC800C77F": "1",
          "0xf9c991E5E84954561A4625A0DC0D879Fd7fbbebc": "1",
          "0xf9e1d1e9f22c96752356adfd377231528c7e851e": "1",
          "0xFa64DCE37ad421a712614b73536B7fbCA598fFD8": "1",
          "0xfa7bd4b2b8ec60b35d881131f71d364a76cad888": "1",
          "0xFAD5B116239Db6F90480586EBa5c07AD2bE08229": "1",
          "0xFB40932271Fc9Db9DbF048E80697E2Da4AA57250": "1",
          "0xfb53cC84f5187c2F386E9895476B3DECF33d4982": "1",
          "0xfbdc0e9522c9d8d40438d2c247bfa43dd5915864": "1",
          "0xFBE6915fB22DFe6b42a7c50b43B45bF692681e5D": "1",
          "0xfbf7ca08848b3f4b6fbc5f383d1ed20d6e23299f": "1",
          "0xfc34d0c274572440004bb728022b5c6feb6c4c7c": "1",
          "0xfCF841748e7834206f13614a53E82b1c92cFB40A": "1",
          "0xfd47bae98581b759aaf0ef477a42bfd363a15a19": "1",
          "0xfe8cC72D95633e3a40CF3D221a609ef0C4807745": "1",
          "0xffe500927dbb171abddab384e1d1754338cca121": "1",
          "0xfffa889f71003f256f0e14b48e54fa2dad1f2ff0": "1",
        },
        accountSources: [AccountSource.ETHEREUM],
        valueType: ValueType.Score,
        tags: [Tags.Factory],
      },
    ];
  },
};

export default generator;
