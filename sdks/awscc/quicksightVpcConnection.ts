// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class QuicksightVpcConnection extends pulumi.CustomResource {
    /**
     * Get an existing QuicksightVpcConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QuicksightVpcConnectionState, opts?: pulumi.CustomResourceOptions): QuicksightVpcConnection {
        return new QuicksightVpcConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/quicksightVpcConnection:QuicksightVpcConnection';

    /**
     * Returns true if the given object is an instance of QuicksightVpcConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is QuicksightVpcConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === QuicksightVpcConnection.__pulumiType;
    }

    /**
     * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly availabilityStatus!: pulumi.Output<string>;
    public readonly awsAccountId!: pulumi.Output<string>;
    /**
     * <p>The time that the VPC connection was created.</p>
     */
    public /*out*/ readonly createdTime!: pulumi.Output<string>;
    public readonly dnsResolvers!: pulumi.Output<string[]>;
    /**
     * <p>The time that the VPC connection was last updated.</p>
     */
    public /*out*/ readonly lastUpdatedTime!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    /**
     * <p>A list of network interfaces.</p>
     */
    public /*out*/ readonly networkInterfaces!: pulumi.Output<outputs.QuicksightVpcConnectionNetworkInterface[]>;
    public readonly roleArn!: pulumi.Output<string>;
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly subnetIds!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<outputs.QuicksightVpcConnectionTag[]>;
    public readonly vpcConnectionId!: pulumi.Output<string>;
    /**
     * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
     */
    public /*out*/ readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a QuicksightVpcConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: QuicksightVpcConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: QuicksightVpcConnectionArgs | QuicksightVpcConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as QuicksightVpcConnectionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["availabilityStatus"] = state ? state.availabilityStatus : undefined;
            resourceInputs["awsAccountId"] = state ? state.awsAccountId : undefined;
            resourceInputs["createdTime"] = state ? state.createdTime : undefined;
            resourceInputs["dnsResolvers"] = state ? state.dnsResolvers : undefined;
            resourceInputs["lastUpdatedTime"] = state ? state.lastUpdatedTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkInterfaces"] = state ? state.networkInterfaces : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcConnectionId"] = state ? state.vpcConnectionId : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as QuicksightVpcConnectionArgs | undefined;
            resourceInputs["availabilityStatus"] = args ? args.availabilityStatus : undefined;
            resourceInputs["awsAccountId"] = args ? args.awsAccountId : undefined;
            resourceInputs["dnsResolvers"] = args ? args.dnsResolvers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcConnectionId"] = args ? args.vpcConnectionId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdTime"] = undefined /*out*/;
            resourceInputs["lastUpdatedTime"] = undefined /*out*/;
            resourceInputs["networkInterfaces"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["vpcId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(QuicksightVpcConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering QuicksightVpcConnection resources.
 */
export interface QuicksightVpcConnectionState {
    /**
     * <p>The Amazon Resource Name (ARN) of the VPC connection.</p>
     */
    arn?: pulumi.Input<string>;
    availabilityStatus?: pulumi.Input<string>;
    awsAccountId?: pulumi.Input<string>;
    /**
     * <p>The time that the VPC connection was created.</p>
     */
    createdTime?: pulumi.Input<string>;
    dnsResolvers?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * <p>The time that the VPC connection was last updated.</p>
     */
    lastUpdatedTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    /**
     * <p>A list of network interfaces.</p>
     */
    networkInterfaces?: pulumi.Input<pulumi.Input<inputs.QuicksightVpcConnectionNetworkInterface>[]>;
    roleArn?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    status?: pulumi.Input<string>;
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.QuicksightVpcConnectionTag>[]>;
    vpcConnectionId?: pulumi.Input<string>;
    /**
     * <p>The Amazon EC2 VPC ID associated with the VPC connection.</p>
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a QuicksightVpcConnection resource.
 */
export interface QuicksightVpcConnectionArgs {
    availabilityStatus?: pulumi.Input<string>;
    awsAccountId?: pulumi.Input<string>;
    dnsResolvers?: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    roleArn?: pulumi.Input<string>;
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<inputs.QuicksightVpcConnectionTag>[]>;
    vpcConnectionId?: pulumi.Input<string>;
}
