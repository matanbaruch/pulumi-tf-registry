// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OssAccountPublicAccessBlock extends pulumi.CustomResource {
    /**
     * Get an existing OssAccountPublicAccessBlock resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OssAccountPublicAccessBlockState, opts?: pulumi.CustomResourceOptions): OssAccountPublicAccessBlock {
        return new OssAccountPublicAccessBlock(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ossAccountPublicAccessBlock:OssAccountPublicAccessBlock';

    /**
     * Returns true if the given object is an instance of OssAccountPublicAccessBlock.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OssAccountPublicAccessBlock {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OssAccountPublicAccessBlock.__pulumiType;
    }

    public readonly blockPublicAccess!: pulumi.Output<boolean>;
    public readonly timeouts!: pulumi.Output<outputs.OssAccountPublicAccessBlockTimeouts | undefined>;

    /**
     * Create a OssAccountPublicAccessBlock resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OssAccountPublicAccessBlockArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OssAccountPublicAccessBlockArgs | OssAccountPublicAccessBlockState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OssAccountPublicAccessBlockState | undefined;
            resourceInputs["blockPublicAccess"] = state ? state.blockPublicAccess : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as OssAccountPublicAccessBlockArgs | undefined;
            if ((!args || args.blockPublicAccess === undefined) && !opts.urn) {
                throw new Error("Missing required property 'blockPublicAccess'");
            }
            resourceInputs["blockPublicAccess"] = args ? args.blockPublicAccess : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OssAccountPublicAccessBlock.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OssAccountPublicAccessBlock resources.
 */
export interface OssAccountPublicAccessBlockState {
    blockPublicAccess?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.OssAccountPublicAccessBlockTimeouts>;
}

/**
 * The set of arguments for constructing a OssAccountPublicAccessBlock resource.
 */
export interface OssAccountPublicAccessBlockArgs {
    blockPublicAccess: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.OssAccountPublicAccessBlockTimeouts>;
}
