// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IcapProfile extends pulumi.CustomResource {
    /**
     * Get an existing IcapProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IcapProfileState, opts?: pulumi.CustomResourceOptions): IcapProfile {
        return new IcapProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/icapProfile:IcapProfile';

    /**
     * Returns true if the given object is an instance of IcapProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IcapProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IcapProfile.__pulumiType;
    }

    public readonly chunkEncap!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly extensionFeature!: pulumi.Output<string>;
    public readonly fileTransfer!: pulumi.Output<string>;
    public readonly fileTransferFailure!: pulumi.Output<string>;
    public readonly fileTransferPath!: pulumi.Output<string>;
    public readonly fileTransferServer!: pulumi.Output<string>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly icapBlockLog!: pulumi.Output<string>;
    public readonly icapHeaders!: pulumi.Output<outputs.IcapProfileIcapHeader[] | undefined>;
    public readonly methods!: pulumi.Output<string>;
    public readonly n204Response!: pulumi.Output<string>;
    public readonly n204SizeLimit!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly preview!: pulumi.Output<string>;
    public readonly previewDataLength!: pulumi.Output<number>;
    public readonly replacemsgGroup!: pulumi.Output<string>;
    public readonly request!: pulumi.Output<string>;
    public readonly requestFailure!: pulumi.Output<string>;
    public readonly requestPath!: pulumi.Output<string>;
    public readonly requestServer!: pulumi.Output<string>;
    public readonly respmodDefaultAction!: pulumi.Output<string>;
    public readonly respmodForwardRules!: pulumi.Output<outputs.IcapProfileRespmodForwardRule[] | undefined>;
    public readonly response!: pulumi.Output<string>;
    public readonly responseFailure!: pulumi.Output<string>;
    public readonly responsePath!: pulumi.Output<string>;
    public readonly responseReqHdr!: pulumi.Output<string>;
    public readonly responseServer!: pulumi.Output<string>;
    public readonly scanProgressInterval!: pulumi.Output<number>;
    public readonly streamingContentBypass!: pulumi.Output<string>;
    public readonly timeout!: pulumi.Output<number>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a IcapProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: IcapProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IcapProfileArgs | IcapProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IcapProfileState | undefined;
            resourceInputs["chunkEncap"] = state ? state.chunkEncap : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["extensionFeature"] = state ? state.extensionFeature : undefined;
            resourceInputs["fileTransfer"] = state ? state.fileTransfer : undefined;
            resourceInputs["fileTransferFailure"] = state ? state.fileTransferFailure : undefined;
            resourceInputs["fileTransferPath"] = state ? state.fileTransferPath : undefined;
            resourceInputs["fileTransferServer"] = state ? state.fileTransferServer : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["icapBlockLog"] = state ? state.icapBlockLog : undefined;
            resourceInputs["icapHeaders"] = state ? state.icapHeaders : undefined;
            resourceInputs["methods"] = state ? state.methods : undefined;
            resourceInputs["n204Response"] = state ? state.n204Response : undefined;
            resourceInputs["n204SizeLimit"] = state ? state.n204SizeLimit : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["preview"] = state ? state.preview : undefined;
            resourceInputs["previewDataLength"] = state ? state.previewDataLength : undefined;
            resourceInputs["replacemsgGroup"] = state ? state.replacemsgGroup : undefined;
            resourceInputs["request"] = state ? state.request : undefined;
            resourceInputs["requestFailure"] = state ? state.requestFailure : undefined;
            resourceInputs["requestPath"] = state ? state.requestPath : undefined;
            resourceInputs["requestServer"] = state ? state.requestServer : undefined;
            resourceInputs["respmodDefaultAction"] = state ? state.respmodDefaultAction : undefined;
            resourceInputs["respmodForwardRules"] = state ? state.respmodForwardRules : undefined;
            resourceInputs["response"] = state ? state.response : undefined;
            resourceInputs["responseFailure"] = state ? state.responseFailure : undefined;
            resourceInputs["responsePath"] = state ? state.responsePath : undefined;
            resourceInputs["responseReqHdr"] = state ? state.responseReqHdr : undefined;
            resourceInputs["responseServer"] = state ? state.responseServer : undefined;
            resourceInputs["scanProgressInterval"] = state ? state.scanProgressInterval : undefined;
            resourceInputs["streamingContentBypass"] = state ? state.streamingContentBypass : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as IcapProfileArgs | undefined;
            resourceInputs["chunkEncap"] = args ? args.chunkEncap : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["extensionFeature"] = args ? args.extensionFeature : undefined;
            resourceInputs["fileTransfer"] = args ? args.fileTransfer : undefined;
            resourceInputs["fileTransferFailure"] = args ? args.fileTransferFailure : undefined;
            resourceInputs["fileTransferPath"] = args ? args.fileTransferPath : undefined;
            resourceInputs["fileTransferServer"] = args ? args.fileTransferServer : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["icapBlockLog"] = args ? args.icapBlockLog : undefined;
            resourceInputs["icapHeaders"] = args ? args.icapHeaders : undefined;
            resourceInputs["methods"] = args ? args.methods : undefined;
            resourceInputs["n204Response"] = args ? args.n204Response : undefined;
            resourceInputs["n204SizeLimit"] = args ? args.n204SizeLimit : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["preview"] = args ? args.preview : undefined;
            resourceInputs["previewDataLength"] = args ? args.previewDataLength : undefined;
            resourceInputs["replacemsgGroup"] = args ? args.replacemsgGroup : undefined;
            resourceInputs["request"] = args ? args.request : undefined;
            resourceInputs["requestFailure"] = args ? args.requestFailure : undefined;
            resourceInputs["requestPath"] = args ? args.requestPath : undefined;
            resourceInputs["requestServer"] = args ? args.requestServer : undefined;
            resourceInputs["respmodDefaultAction"] = args ? args.respmodDefaultAction : undefined;
            resourceInputs["respmodForwardRules"] = args ? args.respmodForwardRules : undefined;
            resourceInputs["response"] = args ? args.response : undefined;
            resourceInputs["responseFailure"] = args ? args.responseFailure : undefined;
            resourceInputs["responsePath"] = args ? args.responsePath : undefined;
            resourceInputs["responseReqHdr"] = args ? args.responseReqHdr : undefined;
            resourceInputs["responseServer"] = args ? args.responseServer : undefined;
            resourceInputs["scanProgressInterval"] = args ? args.scanProgressInterval : undefined;
            resourceInputs["streamingContentBypass"] = args ? args.streamingContentBypass : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IcapProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IcapProfile resources.
 */
export interface IcapProfileState {
    chunkEncap?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    extensionFeature?: pulumi.Input<string>;
    fileTransfer?: pulumi.Input<string>;
    fileTransferFailure?: pulumi.Input<string>;
    fileTransferPath?: pulumi.Input<string>;
    fileTransferServer?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    icapBlockLog?: pulumi.Input<string>;
    icapHeaders?: pulumi.Input<pulumi.Input<inputs.IcapProfileIcapHeader>[]>;
    methods?: pulumi.Input<string>;
    n204Response?: pulumi.Input<string>;
    n204SizeLimit?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    preview?: pulumi.Input<string>;
    previewDataLength?: pulumi.Input<number>;
    replacemsgGroup?: pulumi.Input<string>;
    request?: pulumi.Input<string>;
    requestFailure?: pulumi.Input<string>;
    requestPath?: pulumi.Input<string>;
    requestServer?: pulumi.Input<string>;
    respmodDefaultAction?: pulumi.Input<string>;
    respmodForwardRules?: pulumi.Input<pulumi.Input<inputs.IcapProfileRespmodForwardRule>[]>;
    response?: pulumi.Input<string>;
    responseFailure?: pulumi.Input<string>;
    responsePath?: pulumi.Input<string>;
    responseReqHdr?: pulumi.Input<string>;
    responseServer?: pulumi.Input<string>;
    scanProgressInterval?: pulumi.Input<number>;
    streamingContentBypass?: pulumi.Input<string>;
    timeout?: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IcapProfile resource.
 */
export interface IcapProfileArgs {
    chunkEncap?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    extensionFeature?: pulumi.Input<string>;
    fileTransfer?: pulumi.Input<string>;
    fileTransferFailure?: pulumi.Input<string>;
    fileTransferPath?: pulumi.Input<string>;
    fileTransferServer?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    icapBlockLog?: pulumi.Input<string>;
    icapHeaders?: pulumi.Input<pulumi.Input<inputs.IcapProfileIcapHeader>[]>;
    methods?: pulumi.Input<string>;
    n204Response?: pulumi.Input<string>;
    n204SizeLimit?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    preview?: pulumi.Input<string>;
    previewDataLength?: pulumi.Input<number>;
    replacemsgGroup?: pulumi.Input<string>;
    request?: pulumi.Input<string>;
    requestFailure?: pulumi.Input<string>;
    requestPath?: pulumi.Input<string>;
    requestServer?: pulumi.Input<string>;
    respmodDefaultAction?: pulumi.Input<string>;
    respmodForwardRules?: pulumi.Input<pulumi.Input<inputs.IcapProfileRespmodForwardRule>[]>;
    response?: pulumi.Input<string>;
    responseFailure?: pulumi.Input<string>;
    responsePath?: pulumi.Input<string>;
    responseReqHdr?: pulumi.Input<string>;
    responseServer?: pulumi.Input<string>;
    scanProgressInterval?: pulumi.Input<number>;
    streamingContentBypass?: pulumi.Input<string>;
    timeout?: pulumi.Input<number>;
    vdomparam?: pulumi.Input<string>;
}
