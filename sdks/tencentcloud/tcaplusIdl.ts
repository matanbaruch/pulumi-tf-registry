// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TcaplusIdl extends pulumi.CustomResource {
    /**
     * Get an existing TcaplusIdl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TcaplusIdlState, opts?: pulumi.CustomResourceOptions): TcaplusIdl {
        return new TcaplusIdl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/tcaplusIdl:TcaplusIdl';

    /**
     * Returns true if the given object is an instance of TcaplusIdl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TcaplusIdl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TcaplusIdl.__pulumiType;
    }

    /**
     * ID of the TcaplusDB cluster to which the table group belongs.
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * IDL file content of the TcaplusDB table.
     */
    public readonly fileContent!: pulumi.Output<string>;
    /**
     * File ext type of the IDL file. If `file_type` is `PROTO`, `file_ext_type` must be 'proto'; If `file_type` is `TDR`,
     * `file_ext_type` must be 'xml'.
     */
    public readonly fileExtType!: pulumi.Output<string>;
    /**
     * Name of the IDL file.
     */
    public readonly fileName!: pulumi.Output<string>;
    /**
     * Type of the IDL file. Valid values are PROTO and TDR.
     */
    public readonly fileType!: pulumi.Output<string>;
    /**
     * Table info of the IDL.
     */
    public /*out*/ readonly tableInfos!: pulumi.Output<outputs.TcaplusIdlTableInfo[]>;
    /**
     * ID of the table group to which the IDL file belongs.
     */
    public readonly tablegroupId!: pulumi.Output<string>;

    /**
     * Create a TcaplusIdl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TcaplusIdlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TcaplusIdlArgs | TcaplusIdlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TcaplusIdlState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["fileContent"] = state ? state.fileContent : undefined;
            resourceInputs["fileExtType"] = state ? state.fileExtType : undefined;
            resourceInputs["fileName"] = state ? state.fileName : undefined;
            resourceInputs["fileType"] = state ? state.fileType : undefined;
            resourceInputs["tableInfos"] = state ? state.tableInfos : undefined;
            resourceInputs["tablegroupId"] = state ? state.tablegroupId : undefined;
        } else {
            const args = argsOrState as TcaplusIdlArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.fileContent === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileContent'");
            }
            if ((!args || args.fileExtType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileExtType'");
            }
            if ((!args || args.fileName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileName'");
            }
            if ((!args || args.fileType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileType'");
            }
            if ((!args || args.tablegroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tablegroupId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["fileContent"] = args ? args.fileContent : undefined;
            resourceInputs["fileExtType"] = args ? args.fileExtType : undefined;
            resourceInputs["fileName"] = args ? args.fileName : undefined;
            resourceInputs["fileType"] = args ? args.fileType : undefined;
            resourceInputs["tablegroupId"] = args ? args.tablegroupId : undefined;
            resourceInputs["tableInfos"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TcaplusIdl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TcaplusIdl resources.
 */
export interface TcaplusIdlState {
    /**
     * ID of the TcaplusDB cluster to which the table group belongs.
     */
    clusterId?: pulumi.Input<string>;
    /**
     * IDL file content of the TcaplusDB table.
     */
    fileContent?: pulumi.Input<string>;
    /**
     * File ext type of the IDL file. If `file_type` is `PROTO`, `file_ext_type` must be 'proto'; If `file_type` is `TDR`,
     * `file_ext_type` must be 'xml'.
     */
    fileExtType?: pulumi.Input<string>;
    /**
     * Name of the IDL file.
     */
    fileName?: pulumi.Input<string>;
    /**
     * Type of the IDL file. Valid values are PROTO and TDR.
     */
    fileType?: pulumi.Input<string>;
    /**
     * Table info of the IDL.
     */
    tableInfos?: pulumi.Input<pulumi.Input<inputs.TcaplusIdlTableInfo>[]>;
    /**
     * ID of the table group to which the IDL file belongs.
     */
    tablegroupId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TcaplusIdl resource.
 */
export interface TcaplusIdlArgs {
    /**
     * ID of the TcaplusDB cluster to which the table group belongs.
     */
    clusterId: pulumi.Input<string>;
    /**
     * IDL file content of the TcaplusDB table.
     */
    fileContent: pulumi.Input<string>;
    /**
     * File ext type of the IDL file. If `file_type` is `PROTO`, `file_ext_type` must be 'proto'; If `file_type` is `TDR`,
     * `file_ext_type` must be 'xml'.
     */
    fileExtType: pulumi.Input<string>;
    /**
     * Name of the IDL file.
     */
    fileName: pulumi.Input<string>;
    /**
     * Type of the IDL file. Valid values are PROTO and TDR.
     */
    fileType: pulumi.Input<string>;
    /**
     * ID of the table group to which the IDL file belongs.
     */
    tablegroupId: pulumi.Input<string>;
}
