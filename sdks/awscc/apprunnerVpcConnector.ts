// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApprunnerVpcConnector extends pulumi.CustomResource {
    /**
     * Get an existing ApprunnerVpcConnector resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApprunnerVpcConnectorState, opts?: pulumi.CustomResourceOptions): ApprunnerVpcConnector {
        return new ApprunnerVpcConnector(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/apprunnerVpcConnector:ApprunnerVpcConnector';

    /**
     * Returns true if the given object is an instance of ApprunnerVpcConnector.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApprunnerVpcConnector {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApprunnerVpcConnector.__pulumiType;
    }

    /**
     * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If
     * not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all
     * outbound traffic.
     */
    public readonly securityGroups!: pulumi.Output<string[]>;
    /**
     * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify
     * IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
     */
    public readonly subnets!: pulumi.Output<string[]>;
    /**
     * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
     */
    public readonly tags!: pulumi.Output<outputs.ApprunnerVpcConnectorTag[]>;
    /**
     * The Amazon Resource Name (ARN) of this VPC connector.
     */
    public /*out*/ readonly vpcConnectorArn!: pulumi.Output<string>;
    /**
     * A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
     */
    public readonly vpcConnectorName!: pulumi.Output<string>;
    /**
     * The revision of this VPC connector. It's unique among all the active connectors ("Status": "ACTIVE") that share the same
     * Name.
     */
    public /*out*/ readonly vpcConnectorRevision!: pulumi.Output<number>;

    /**
     * Create a ApprunnerVpcConnector resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApprunnerVpcConnectorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApprunnerVpcConnectorArgs | ApprunnerVpcConnectorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApprunnerVpcConnectorState | undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["subnets"] = state ? state.subnets : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcConnectorArn"] = state ? state.vpcConnectorArn : undefined;
            resourceInputs["vpcConnectorName"] = state ? state.vpcConnectorName : undefined;
            resourceInputs["vpcConnectorRevision"] = state ? state.vpcConnectorRevision : undefined;
        } else {
            const args = argsOrState as ApprunnerVpcConnectorArgs | undefined;
            if ((!args || args.subnets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnets'");
            }
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["subnets"] = args ? args.subnets : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcConnectorName"] = args ? args.vpcConnectorName : undefined;
            resourceInputs["vpcConnectorArn"] = undefined /*out*/;
            resourceInputs["vpcConnectorRevision"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApprunnerVpcConnector.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApprunnerVpcConnector resources.
 */
export interface ApprunnerVpcConnectorState {
    /**
     * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If
     * not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all
     * outbound traffic.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify
     * IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
     */
    subnets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.ApprunnerVpcConnectorTag>[]>;
    /**
     * The Amazon Resource Name (ARN) of this VPC connector.
     */
    vpcConnectorArn?: pulumi.Input<string>;
    /**
     * A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
     */
    vpcConnectorName?: pulumi.Input<string>;
    /**
     * The revision of this VPC connector. It's unique among all the active connectors ("Status": "ACTIVE") that share the same
     * Name.
     */
    vpcConnectorRevision?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ApprunnerVpcConnector resource.
 */
export interface ApprunnerVpcConnectorArgs {
    /**
     * A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If
     * not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all
     * outbound traffic.
     */
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify
     * IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
     */
    subnets: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.ApprunnerVpcConnectorTag>[]>;
    /**
     * A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
     */
    vpcConnectorName?: pulumi.Input<string>;
}
