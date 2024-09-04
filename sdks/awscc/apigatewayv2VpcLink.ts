// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Apigatewayv2VpcLink extends pulumi.CustomResource {
    /**
     * Get an existing Apigatewayv2VpcLink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Apigatewayv2VpcLinkState, opts?: pulumi.CustomResourceOptions): Apigatewayv2VpcLink {
        return new Apigatewayv2VpcLink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/apigatewayv2VpcLink:Apigatewayv2VpcLink';

    /**
     * Returns true if the given object is an instance of Apigatewayv2VpcLink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Apigatewayv2VpcLink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Apigatewayv2VpcLink.__pulumiType;
    }

    /**
     * The name of the VPC link.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of security group IDs for the VPC link.
     */
    public readonly securityGroupIds!: pulumi.Output<string[]>;
    /**
     * A list of subnet IDs to include in the VPC link.
     */
    public readonly subnetIds!: pulumi.Output<string[]>;
    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly vpcLinkId!: pulumi.Output<string>;

    /**
     * Create a Apigatewayv2VpcLink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Apigatewayv2VpcLinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Apigatewayv2VpcLinkArgs | Apigatewayv2VpcLinkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Apigatewayv2VpcLinkState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["securityGroupIds"] = state ? state.securityGroupIds : undefined;
            resourceInputs["subnetIds"] = state ? state.subnetIds : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["vpcLinkId"] = state ? state.vpcLinkId : undefined;
        } else {
            const args = argsOrState as Apigatewayv2VpcLinkArgs | undefined;
            if ((!args || args.subnetIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetIds'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["securityGroupIds"] = args ? args.securityGroupIds : undefined;
            resourceInputs["subnetIds"] = args ? args.subnetIds : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpcLinkId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Apigatewayv2VpcLink.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Apigatewayv2VpcLink resources.
 */
export interface Apigatewayv2VpcLinkState {
    /**
     * The name of the VPC link.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of security group IDs for the VPC link.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of subnet IDs to include in the VPC link.
     */
    subnetIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    vpcLinkId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Apigatewayv2VpcLink resource.
 */
export interface Apigatewayv2VpcLinkArgs {
    /**
     * The name of the VPC link.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of security group IDs for the VPC link.
     */
    securityGroupIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A list of subnet IDs to include in the VPC link.
     */
    subnetIds: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The collection of tags. Each tag element is associated with a given resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
