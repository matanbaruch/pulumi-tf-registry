// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CaptureConfig extends pulumi.CustomResource {
    /**
     * Get an existing CaptureConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CaptureConfigState, opts?: pulumi.CustomResourceOptions): CaptureConfig {
        return new CaptureConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/captureConfig:CaptureConfig';

    /**
     * Returns true if the given object is an instance of CaptureConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CaptureConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CaptureConfig.__pulumiType;
    }

    /**
     * Specify maximum packet number. (default 0 for unlimited)
     */
    public readonly count1!: pulumi.Output<number | undefined>;
    /**
     * Enable capture-config
     */
    public readonly enable!: pulumi.Output<number | undefined>;
    /**
     * (Default) Specify pcapng file history size in MB (default 10)
     */
    public readonly fileHistorySize!: pulumi.Output<number | undefined>;
    /**
     * Specify pcapng filesize in MB (default 10)
     */
    public readonly fileSize!: pulumi.Output<number | undefined>;
    /**
     * Filter packets to save using Berkeley Packet Filter syntax
     */
    public readonly filter!: pulumi.Output<string | undefined>;
    /**
     * Packet length Bytes to capture (Default 128)
     */
    public readonly length!: pulumi.Output<number | undefined>;
    /**
     * capture-config name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a CaptureConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CaptureConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CaptureConfigArgs | CaptureConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CaptureConfigState | undefined;
            resourceInputs["count1"] = state ? state.count1 : undefined;
            resourceInputs["enable"] = state ? state.enable : undefined;
            resourceInputs["fileHistorySize"] = state ? state.fileHistorySize : undefined;
            resourceInputs["fileSize"] = state ? state.fileSize : undefined;
            resourceInputs["filter"] = state ? state.filter : undefined;
            resourceInputs["length"] = state ? state.length : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as CaptureConfigArgs | undefined;
            resourceInputs["count1"] = args ? args.count1 : undefined;
            resourceInputs["enable"] = args ? args.enable : undefined;
            resourceInputs["fileHistorySize"] = args ? args.fileHistorySize : undefined;
            resourceInputs["fileSize"] = args ? args.fileSize : undefined;
            resourceInputs["filter"] = args ? args.filter : undefined;
            resourceInputs["length"] = args ? args.length : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CaptureConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CaptureConfig resources.
 */
export interface CaptureConfigState {
    /**
     * Specify maximum packet number. (default 0 for unlimited)
     */
    count1?: pulumi.Input<number>;
    /**
     * Enable capture-config
     */
    enable?: pulumi.Input<number>;
    /**
     * (Default) Specify pcapng file history size in MB (default 10)
     */
    fileHistorySize?: pulumi.Input<number>;
    /**
     * Specify pcapng filesize in MB (default 10)
     */
    fileSize?: pulumi.Input<number>;
    /**
     * Filter packets to save using Berkeley Packet Filter syntax
     */
    filter?: pulumi.Input<string>;
    /**
     * Packet length Bytes to capture (Default 128)
     */
    length?: pulumi.Input<number>;
    /**
     * capture-config name
     */
    name?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CaptureConfig resource.
 */
export interface CaptureConfigArgs {
    /**
     * Specify maximum packet number. (default 0 for unlimited)
     */
    count1?: pulumi.Input<number>;
    /**
     * Enable capture-config
     */
    enable?: pulumi.Input<number>;
    /**
     * (Default) Specify pcapng file history size in MB (default 10)
     */
    fileHistorySize?: pulumi.Input<number>;
    /**
     * Specify pcapng filesize in MB (default 10)
     */
    fileSize?: pulumi.Input<number>;
    /**
     * Filter packets to save using Berkeley Packet Filter syntax
     */
    filter?: pulumi.Input<string>;
    /**
     * Packet length Bytes to capture (Default 128)
     */
    length?: pulumi.Input<number>;
    /**
     * capture-config name
     */
    name?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
