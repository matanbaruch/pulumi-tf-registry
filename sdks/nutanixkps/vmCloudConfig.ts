// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class VmCloudConfig extends pulumi.CustomResource {
    /**
     * Get an existing VmCloudConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VmCloudConfigState, opts?: pulumi.CustomResourceOptions): VmCloudConfig {
        return new VmCloudConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nutanixkps:index/vmCloudConfig:VmCloudConfig';

    /**
     * Returns true if the given object is an instance of VmCloudConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VmCloudConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VmCloudConfig.__pulumiType;
    }

    public readonly cloudFqdn!: pulumi.Output<string>;
    public readonly publicIpAddress!: pulumi.Output<string>;

    /**
     * Create a VmCloudConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VmCloudConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VmCloudConfigArgs | VmCloudConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VmCloudConfigState | undefined;
            resourceInputs["cloudFqdn"] = state ? state.cloudFqdn : undefined;
            resourceInputs["publicIpAddress"] = state ? state.publicIpAddress : undefined;
        } else {
            const args = argsOrState as VmCloudConfigArgs | undefined;
            if ((!args || args.cloudFqdn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudFqdn'");
            }
            if ((!args || args.publicIpAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'publicIpAddress'");
            }
            resourceInputs["cloudFqdn"] = args ? args.cloudFqdn : undefined;
            resourceInputs["publicIpAddress"] = args ? args.publicIpAddress : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VmCloudConfig.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VmCloudConfig resources.
 */
export interface VmCloudConfigState {
    cloudFqdn?: pulumi.Input<string>;
    publicIpAddress?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a VmCloudConfig resource.
 */
export interface VmCloudConfigArgs {
    cloudFqdn: pulumi.Input<string>;
    publicIpAddress: pulumi.Input<string>;
}
