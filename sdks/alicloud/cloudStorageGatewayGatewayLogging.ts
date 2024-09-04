// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudStorageGatewayGatewayLogging extends pulumi.CustomResource {
    /**
     * Get an existing CloudStorageGatewayGatewayLogging resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudStorageGatewayGatewayLoggingState, opts?: pulumi.CustomResourceOptions): CloudStorageGatewayGatewayLogging {
        return new CloudStorageGatewayGatewayLogging(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cloudStorageGatewayGatewayLogging:CloudStorageGatewayGatewayLogging';

    /**
     * Returns true if the given object is an instance of CloudStorageGatewayGatewayLogging.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudStorageGatewayGatewayLogging {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudStorageGatewayGatewayLogging.__pulumiType;
    }

    public readonly gatewayId!: pulumi.Output<string>;
    public readonly slsLogstore!: pulumi.Output<string>;
    public readonly slsProject!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a CloudStorageGatewayGatewayLogging resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudStorageGatewayGatewayLoggingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudStorageGatewayGatewayLoggingArgs | CloudStorageGatewayGatewayLoggingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudStorageGatewayGatewayLoggingState | undefined;
            resourceInputs["gatewayId"] = state ? state.gatewayId : undefined;
            resourceInputs["slsLogstore"] = state ? state.slsLogstore : undefined;
            resourceInputs["slsProject"] = state ? state.slsProject : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as CloudStorageGatewayGatewayLoggingArgs | undefined;
            if ((!args || args.gatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayId'");
            }
            if ((!args || args.slsLogstore === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slsLogstore'");
            }
            if ((!args || args.slsProject === undefined) && !opts.urn) {
                throw new Error("Missing required property 'slsProject'");
            }
            resourceInputs["gatewayId"] = args ? args.gatewayId : undefined;
            resourceInputs["slsLogstore"] = args ? args.slsLogstore : undefined;
            resourceInputs["slsProject"] = args ? args.slsProject : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudStorageGatewayGatewayLogging.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudStorageGatewayGatewayLogging resources.
 */
export interface CloudStorageGatewayGatewayLoggingState {
    gatewayId?: pulumi.Input<string>;
    slsLogstore?: pulumi.Input<string>;
    slsProject?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudStorageGatewayGatewayLogging resource.
 */
export interface CloudStorageGatewayGatewayLoggingArgs {
    gatewayId: pulumi.Input<string>;
    slsLogstore: pulumi.Input<string>;
    slsProject: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
