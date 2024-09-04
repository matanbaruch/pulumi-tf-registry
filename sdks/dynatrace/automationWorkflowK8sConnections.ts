// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AutomationWorkflowK8sConnections extends pulumi.CustomResource {
    /**
     * Get an existing AutomationWorkflowK8sConnections resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutomationWorkflowK8sConnectionsState, opts?: pulumi.CustomResourceOptions): AutomationWorkflowK8sConnections {
        return new AutomationWorkflowK8sConnections(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'dynatrace:index/automationWorkflowK8sConnections:AutomationWorkflowK8sConnections';

    /**
     * Returns true if the given object is an instance of AutomationWorkflowK8sConnections.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutomationWorkflowK8sConnections {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutomationWorkflowK8sConnections.__pulumiType;
    }

    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     *
     * @deprecated Deprecated
     */
    public readonly insertAfter!: pulumi.Output<string>;
    /**
     * The name of the EdgeConnect deployment
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The namespace where EdgeConnect is deployed
     */
    public readonly namespace!: pulumi.Output<string>;
    /**
     * Token
     */
    public readonly token!: pulumi.Output<string>;
    /**
     * A pseudo-ID for the cluster, set to the UID of the kube-system namespace
     */
    public readonly uid!: pulumi.Output<string>;

    /**
     * Create a AutomationWorkflowK8sConnections resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutomationWorkflowK8sConnectionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutomationWorkflowK8sConnectionsArgs | AutomationWorkflowK8sConnectionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutomationWorkflowK8sConnectionsState | undefined;
            resourceInputs["insertAfter"] = state ? state.insertAfter : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
            resourceInputs["uid"] = state ? state.uid : undefined;
        } else {
            const args = argsOrState as AutomationWorkflowK8sConnectionsArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.token === undefined) && !opts.urn) {
                throw new Error("Missing required property 'token'");
            }
            if ((!args || args.uid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uid'");
            }
            resourceInputs["insertAfter"] = args ? args.insertAfter : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
            resourceInputs["uid"] = args ? args.uid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AutomationWorkflowK8sConnections.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutomationWorkflowK8sConnections resources.
 */
export interface AutomationWorkflowK8sConnectionsState {
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     *
     * @deprecated Deprecated
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * The name of the EdgeConnect deployment
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace where EdgeConnect is deployed
     */
    namespace?: pulumi.Input<string>;
    /**
     * Token
     */
    token?: pulumi.Input<string>;
    /**
     * A pseudo-ID for the cluster, set to the UID of the kube-system namespace
     */
    uid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AutomationWorkflowK8sConnections resource.
 */
export interface AutomationWorkflowK8sConnectionsArgs {
    /**
     * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this
     * instance regarding order. If not specified when creating the setting will be added to the end of the list. If not
     * specified during update the order will remain untouched
     *
     * @deprecated Deprecated
     */
    insertAfter?: pulumi.Input<string>;
    /**
     * The name of the EdgeConnect deployment
     */
    name?: pulumi.Input<string>;
    /**
     * The namespace where EdgeConnect is deployed
     */
    namespace: pulumi.Input<string>;
    /**
     * Token
     */
    token: pulumi.Input<string>;
    /**
     * A pseudo-ID for the cluster, set to the UID of the kube-system namespace
     */
    uid: pulumi.Input<string>;
}
