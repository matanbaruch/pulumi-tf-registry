// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DeadlineLicenseEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing DeadlineLicenseEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeadlineLicenseEndpointState, opts?: pulumi.CustomResourceOptions): DeadlineLicenseEndpoint {
        return new DeadlineLicenseEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/deadlineLicenseEndpoint:DeadlineLicenseEndpoint';

    /**
     * Returns true if the given object is an instance of DeadlineLicenseEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeadlineLicenseEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeadlineLicenseEndpoint.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly dnsName!: pulumi.Output<string>;
    public /*out*/ readonly licenseEndpointId!: pulumi.Output<string>;
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public /*out*/ readonly statusMessage!: pulumi.Output<string>;
    public readonly subnetIds!: pulumi.Output<string[]>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    public readonly tags!: pulumi.Output<outputs.DeadlineLicenseEndpointTag[]>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a DeadlineLicenseEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeadlineLicenseEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeadlineLicenseEndpointArgs | DeadlineLicenseEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DeadlineLicenseEndpointState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["dnsName"] = state ? state.dnsName : undefined;
            resourceInputs["licenseEndpointId"] = state ? state.licenseEndpointId : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["statusMessage"] = state ? state.statusMessage : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as DeadlineLicenseEndpointArgs | undefined;
            if ((!args || args.securityGroupIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupIds'");
            }
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["dnsName"] = undefined /*out*/;
            resourceInputs["licenseEndpointId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["statusMessage"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DeadlineLicenseEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DeadlineLicenseEndpoint resources.
 */
export interface DeadlineLicenseEndpointState {
    arn?: pulumi.Input<string>;
    dnsName?: pulumi.Input<string>;
    licenseEndpointId?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
    statusMessage?: pulumi.Input<string>;
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DeadlineLicenseEndpointTag>[]>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DeadlineLicenseEndpoint resource.
 */
export interface DeadlineLicenseEndpointArgs {
    securityGroupIds: pulumi.Input<pulumi.Input<string>[]>;
    subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * An array of key-value pairs to apply to this resource.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.DeadlineLicenseEndpointTag>[]>;
    vpcId: pulumi.Input<string>;
}
