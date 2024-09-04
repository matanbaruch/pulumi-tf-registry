// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultReplicationAssurancePolicy extends pulumi.CustomResource {
    /**
     * Get an existing DefaultReplicationAssurancePolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultReplicationAssurancePolicyState, opts?: pulumi.CustomResourceOptions): DefaultReplicationAssurancePolicy {
        return new DefaultReplicationAssurancePolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/defaultReplicationAssurancePolicy:DefaultReplicationAssurancePolicy';

    /**
     * Returns true if the given object is an instance of DefaultReplicationAssurancePolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultReplicationAssurancePolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultReplicationAssurancePolicy.__pulumiType;
    }

    /**
     * Specifies a connection criteria used to indicate which operations from clients matching this criteria use this policy.
     * If both a connection criteria and a request criteria are specified for a policy, then both must match an operation for
     * the policy to be assigned.
     */
    public readonly connectionCriteria!: pulumi.Output<string>;
    /**
     * Description of the Replication Assurance Policy.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Indicates whether this Replication Assurance Policy is enabled for use in the server. If a Replication Assurance Policy
     * is disabled, then no new operations will be associated with it.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * When multiple Replication Assurance Policies are defined, this property determines the evaluation order for finding a
     * Replication Assurance Policy match against an operation. Policies are evaluated based on this index from least to
     * greatest. Values of this property must be unique but not necessarily contiguous.
     */
    public readonly evaluationOrderIndex!: pulumi.Output<number>;
    /**
     * Specifies the assurance level used to replicate to local servers. A local server is defined as one with the same value
     * for the location setting in the global configuration. The local-level must be set to an assurance level at least as
     * strict as the remote-level. In other words, if remote-level is set to "received-any-remote-location" or
     * "received-all-remote-locations", then local-level must be either "received-any-server" or "processed-all-servers". If
     * remote-level is "processed-all-remote-servers", then local-level must be "processed-all-servers".
     */
    public readonly localLevel!: pulumi.Output<string>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Specifies the assurance level used to replicate to remote servers. A remote server is defined as one with a different
     * value for the location setting in the global configuration.
     */
    public readonly remoteLevel!: pulumi.Output<string>;
    /**
     * Specifies a request criteria used to indicate which operations from clients matching this criteria use this policy. If
     * both a connection criteria and a request criteria are specified for a policy, then both must match an operation for the
     * policy to be assigned.
     */
    public readonly requestCriteria!: pulumi.Output<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.DefaultReplicationAssurancePolicyRequiredAction[]>;
    /**
     * Specifies the maximum length of time to wait for the replication assurance requirements to be met before timing out and
     * replying to the client.
     */
    public readonly timeout!: pulumi.Output<string>;
    /**
     * The type of Replication Assurance Policy resource. Options are ['replication-assurance-policy']
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a DefaultReplicationAssurancePolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DefaultReplicationAssurancePolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultReplicationAssurancePolicyArgs | DefaultReplicationAssurancePolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultReplicationAssurancePolicyState | undefined;
            resourceInputs["connectionCriteria"] = state ? state.connectionCriteria : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["evaluationOrderIndex"] = state ? state.evaluationOrderIndex : undefined;
            resourceInputs["localLevel"] = state ? state.localLevel : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["remoteLevel"] = state ? state.remoteLevel : undefined;
            resourceInputs["requestCriteria"] = state ? state.requestCriteria : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DefaultReplicationAssurancePolicyArgs | undefined;
            resourceInputs["connectionCriteria"] = args ? args.connectionCriteria : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["evaluationOrderIndex"] = args ? args.evaluationOrderIndex : undefined;
            resourceInputs["localLevel"] = args ? args.localLevel : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remoteLevel"] = args ? args.remoteLevel : undefined;
            resourceInputs["requestCriteria"] = args ? args.requestCriteria : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultReplicationAssurancePolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultReplicationAssurancePolicy resources.
 */
export interface DefaultReplicationAssurancePolicyState {
    /**
     * Specifies a connection criteria used to indicate which operations from clients matching this criteria use this policy.
     * If both a connection criteria and a request criteria are specified for a policy, then both must match an operation for
     * the policy to be assigned.
     */
    connectionCriteria?: pulumi.Input<string>;
    /**
     * Description of the Replication Assurance Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether this Replication Assurance Policy is enabled for use in the server. If a Replication Assurance Policy
     * is disabled, then no new operations will be associated with it.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * When multiple Replication Assurance Policies are defined, this property determines the evaluation order for finding a
     * Replication Assurance Policy match against an operation. Policies are evaluated based on this index from least to
     * greatest. Values of this property must be unique but not necessarily contiguous.
     */
    evaluationOrderIndex?: pulumi.Input<number>;
    /**
     * Specifies the assurance level used to replicate to local servers. A local server is defined as one with the same value
     * for the location setting in the global configuration. The local-level must be set to an assurance level at least as
     * strict as the remote-level. In other words, if remote-level is set to "received-any-remote-location" or
     * "received-all-remote-locations", then local-level must be either "received-any-server" or "processed-all-servers". If
     * remote-level is "processed-all-remote-servers", then local-level must be "processed-all-servers".
     */
    localLevel?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Specifies the assurance level used to replicate to remote servers. A remote server is defined as one with a different
     * value for the location setting in the global configuration.
     */
    remoteLevel?: pulumi.Input<string>;
    /**
     * Specifies a request criteria used to indicate which operations from clients matching this criteria use this policy. If
     * both a connection criteria and a request criteria are specified for a policy, then both must match an operation for the
     * policy to be assigned.
     */
    requestCriteria?: pulumi.Input<string>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.DefaultReplicationAssurancePolicyRequiredAction>[]>;
    /**
     * Specifies the maximum length of time to wait for the replication assurance requirements to be met before timing out and
     * replying to the client.
     */
    timeout?: pulumi.Input<string>;
    /**
     * The type of Replication Assurance Policy resource. Options are ['replication-assurance-policy']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultReplicationAssurancePolicy resource.
 */
export interface DefaultReplicationAssurancePolicyArgs {
    /**
     * Specifies a connection criteria used to indicate which operations from clients matching this criteria use this policy.
     * If both a connection criteria and a request criteria are specified for a policy, then both must match an operation for
     * the policy to be assigned.
     */
    connectionCriteria?: pulumi.Input<string>;
    /**
     * Description of the Replication Assurance Policy.
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether this Replication Assurance Policy is enabled for use in the server. If a Replication Assurance Policy
     * is disabled, then no new operations will be associated with it.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * When multiple Replication Assurance Policies are defined, this property determines the evaluation order for finding a
     * Replication Assurance Policy match against an operation. Policies are evaluated based on this index from least to
     * greatest. Values of this property must be unique but not necessarily contiguous.
     */
    evaluationOrderIndex?: pulumi.Input<number>;
    /**
     * Specifies the assurance level used to replicate to local servers. A local server is defined as one with the same value
     * for the location setting in the global configuration. The local-level must be set to an assurance level at least as
     * strict as the remote-level. In other words, if remote-level is set to "received-any-remote-location" or
     * "received-all-remote-locations", then local-level must be either "received-any-server" or "processed-all-servers". If
     * remote-level is "processed-all-remote-servers", then local-level must be "processed-all-servers".
     */
    localLevel?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the assurance level used to replicate to remote servers. A remote server is defined as one with a different
     * value for the location setting in the global configuration.
     */
    remoteLevel?: pulumi.Input<string>;
    /**
     * Specifies a request criteria used to indicate which operations from clients matching this criteria use this policy. If
     * both a connection criteria and a request criteria are specified for a policy, then both must match an operation for the
     * policy to be assigned.
     */
    requestCriteria?: pulumi.Input<string>;
    /**
     * Specifies the maximum length of time to wait for the replication assurance requirements to be met before timing out and
     * replying to the client.
     */
    timeout?: pulumi.Input<string>;
}
