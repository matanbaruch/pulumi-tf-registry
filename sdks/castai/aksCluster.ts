// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AksCluster extends pulumi.CustomResource {
    /**
     * Get an existing AksCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AksClusterState, opts?: pulumi.CustomResourceOptions): AksCluster {
        return new AksCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'castai:index/aksCluster:AksCluster';

    /**
     * Returns true if the given object is an instance of AksCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AksCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AksCluster.__pulumiType;
    }

    /**
     * Azure AD application ID that is created and used by CAST AI.
     */
    public readonly clientId!: pulumi.Output<string>;
    /**
     * Azure AD application password that will be used by CAST AI.
     */
    public readonly clientSecret!: pulumi.Output<string>;
    /**
     * CAST AI cluster token.
     */
    public /*out*/ readonly clusterToken!: pulumi.Output<string>;
    /**
     * CAST AI internal credentials ID
     */
    public /*out*/ readonly credentialsId!: pulumi.Output<string>;
    /**
     * Should CAST AI remove nodes managed by CAST.AI on disconnect.
     */
    public readonly deleteNodesOnDisconnect!: pulumi.Output<boolean | undefined>;
    /**
     * AKS cluster name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Azure resource group in which nodes are and will be created.
     */
    public readonly nodeResourceGroup!: pulumi.Output<string>;
    /**
     * AKS cluster region.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * ID of the Azure subscription.
     */
    public readonly subscriptionId!: pulumi.Output<string>;
    /**
     * Azure AD tenant ID from the used subscription.
     */
    public readonly tenantId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AksClusterTimeouts | undefined>;

    /**
     * Create a AksCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AksClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AksClusterArgs | AksClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AksClusterState | undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["clusterToken"] = state ? state.clusterToken : undefined;
            resourceInputs["credentialsId"] = state ? state.credentialsId : undefined;
            resourceInputs["deleteNodesOnDisconnect"] = state ? state.deleteNodesOnDisconnect : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeResourceGroup"] = state ? state.nodeResourceGroup : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["subscriptionId"] = state ? state.subscriptionId : undefined;
            resourceInputs["tenantId"] = state ? state.tenantId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AksClusterArgs | undefined;
            if ((!args || args.clientId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientId'");
            }
            if ((!args || args.clientSecret === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientSecret'");
            }
            if ((!args || args.nodeResourceGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodeResourceGroup'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            if ((!args || args.tenantId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tenantId'");
            }
            resourceInputs["clientId"] = args ? args.clientId : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["deleteNodesOnDisconnect"] = args ? args.deleteNodesOnDisconnect : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeResourceGroup"] = args ? args.nodeResourceGroup : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["tenantId"] = args ? args.tenantId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["clusterToken"] = undefined /*out*/;
            resourceInputs["credentialsId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientSecret", "clusterToken"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AksCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AksCluster resources.
 */
export interface AksClusterState {
    /**
     * Azure AD application ID that is created and used by CAST AI.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Azure AD application password that will be used by CAST AI.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * CAST AI cluster token.
     */
    clusterToken?: pulumi.Input<string>;
    /**
     * CAST AI internal credentials ID
     */
    credentialsId?: pulumi.Input<string>;
    /**
     * Should CAST AI remove nodes managed by CAST.AI on disconnect.
     */
    deleteNodesOnDisconnect?: pulumi.Input<boolean>;
    /**
     * AKS cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * Azure resource group in which nodes are and will be created.
     */
    nodeResourceGroup?: pulumi.Input<string>;
    /**
     * AKS cluster region.
     */
    region?: pulumi.Input<string>;
    /**
     * ID of the Azure subscription.
     */
    subscriptionId?: pulumi.Input<string>;
    /**
     * Azure AD tenant ID from the used subscription.
     */
    tenantId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AksClusterTimeouts>;
}

/**
 * The set of arguments for constructing a AksCluster resource.
 */
export interface AksClusterArgs {
    /**
     * Azure AD application ID that is created and used by CAST AI.
     */
    clientId: pulumi.Input<string>;
    /**
     * Azure AD application password that will be used by CAST AI.
     */
    clientSecret: pulumi.Input<string>;
    /**
     * Should CAST AI remove nodes managed by CAST.AI on disconnect.
     */
    deleteNodesOnDisconnect?: pulumi.Input<boolean>;
    /**
     * AKS cluster name.
     */
    name?: pulumi.Input<string>;
    /**
     * Azure resource group in which nodes are and will be created.
     */
    nodeResourceGroup: pulumi.Input<string>;
    /**
     * AKS cluster region.
     */
    region: pulumi.Input<string>;
    /**
     * ID of the Azure subscription.
     */
    subscriptionId: pulumi.Input<string>;
    /**
     * Azure AD tenant ID from the used subscription.
     */
    tenantId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AksClusterTimeouts>;
}
