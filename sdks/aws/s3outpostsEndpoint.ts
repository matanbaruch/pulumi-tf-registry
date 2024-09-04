// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class S3outpostsEndpoint extends pulumi.CustomResource {
    /**
     * Get an existing S3outpostsEndpoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3outpostsEndpointState, opts?: pulumi.CustomResourceOptions): S3outpostsEndpoint {
        return new S3outpostsEndpoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/s3outpostsEndpoint:S3outpostsEndpoint';

    /**
     * Returns true if the given object is an instance of S3outpostsEndpoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3outpostsEndpoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3outpostsEndpoint.__pulumiType;
    }

    public readonly accessType!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly cidrBlock!: pulumi.Output<string>;
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    public readonly customerOwnedIpv4Pool!: pulumi.Output<string | undefined>;
    public /*out*/ readonly networkInterfaces!: pulumi.Output<outputs.S3outpostsEndpointNetworkInterface[]>;
    public readonly outpostId!: pulumi.Output<string>;
    public readonly securityGroupId!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;

    /**
     * Create a S3outpostsEndpoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3outpostsEndpointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3outpostsEndpointArgs | S3outpostsEndpointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3outpostsEndpointState | undefined;
            resourceInputs["accessType"] = state ? state.accessType : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["customerOwnedIpv4Pool"] = state ? state.customerOwnedIpv4Pool : undefined;
            resourceInputs["networkInterfaces"] = state ? state.networkInterfaces : undefined;
            resourceInputs["outpostId"] = state ? state.outpostId : undefined;
            resourceInputs["securityGroupId"] = state ? state.securityGroupId : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
        } else {
            const args = argsOrState as S3outpostsEndpointArgs | undefined;
            if ((!args || args.outpostId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'outpostId'");
            }
            if ((!args || args.securityGroupId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroupId'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            resourceInputs["accessType"] = args ? args.accessType : undefined;
            resourceInputs["customerOwnedIpv4Pool"] = args ? args.customerOwnedIpv4Pool : undefined;
            resourceInputs["outpostId"] = args ? args.outpostId : undefined;
            resourceInputs["securityGroupId"] = args ? args.securityGroupId : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["cidrBlock"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3outpostsEndpoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3outpostsEndpoint resources.
 */
export interface S3outpostsEndpointState {
    accessType?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    cidrBlock?: pulumi.Input<string>;
    creationTime?: pulumi.Input<string>;
    customerOwnedIpv4Pool?: pulumi.Input<string>;
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.S3outpostsEndpointNetworkInterface>[]>;
    outpostId?: pulumi.Input<string>;
    securityGroupId?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a S3outpostsEndpoint resource.
 */
export interface S3outpostsEndpointArgs {
    accessType?: pulumi.Input<string>;
    customerOwnedIpv4Pool?: pulumi.Input<string>;
    outpostId: pulumi.Input<string>;
    securityGroupId: pulumi.Input<string>;
    subnetId: pulumi.Input<string>;
}
