// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MskVpcConnection extends pulumi.CustomResource {
    /**
     * Get an existing MskVpcConnection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MskVpcConnectionState, opts?: pulumi.CustomResourceOptions): MskVpcConnection {
        return new MskVpcConnection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/mskVpcConnection:MskVpcConnection';

    /**
     * Returns true if the given object is an instance of MskVpcConnection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MskVpcConnection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MskVpcConnection.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly authentication!: pulumi.Output<string>;
    public readonly clientSubnets!: pulumi.Output<string[]>;
    public readonly securityGroups!: pulumi.Output<string[]>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly targetClusterArn!: pulumi.Output<string>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a MskVpcConnection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MskVpcConnectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MskVpcConnectionArgs | MskVpcConnectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MskVpcConnectionState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["authentication"] = state ? state.authentication : undefined;
            resourceInputs["clientSubnets"] = state ? state.clientSubnets : undefined;
            resourceInputs["securityGroups"] = state ? state.securityGroups : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["targetClusterArn"] = state ? state.targetClusterArn : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as MskVpcConnectionArgs | undefined;
            if ((!args || args.authentication === undefined) && !opts.urn) {
                throw new Error("Missing required property 'authentication'");
            }
            if ((!args || args.clientSubnets === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientSubnets'");
            }
            if ((!args || args.securityGroups === undefined) && !opts.urn) {
                throw new Error("Missing required property 'securityGroups'");
            }
            if ((!args || args.targetClusterArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetClusterArn'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["authentication"] = args ? args.authentication : undefined;
            resourceInputs["clientSubnets"] = args ? args.clientSubnets : undefined;
            resourceInputs["securityGroups"] = args ? args.securityGroups : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["targetClusterArn"] = args ? args.targetClusterArn : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MskVpcConnection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MskVpcConnection resources.
 */
export interface MskVpcConnectionState {
    arn?: pulumi.Input<string>;
    authentication?: pulumi.Input<string>;
    clientSubnets?: pulumi.Input<pulumi.Input<string>[]>;
    securityGroups?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetClusterArn?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MskVpcConnection resource.
 */
export interface MskVpcConnectionArgs {
    authentication: pulumi.Input<string>;
    clientSubnets: pulumi.Input<pulumi.Input<string>[]>;
    securityGroups: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    targetClusterArn: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}
