// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DirectAppdynamics extends pulumi.CustomResource {
    /**
     * Get an existing DirectAppdynamics resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectAppdynamicsState, opts?: pulumi.CustomResourceOptions): DirectAppdynamics {
        return new DirectAppdynamics(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nobl9:index/directAppdynamics:DirectAppdynamics';

    /**
     * Returns true if the given object is an instance of DirectAppdynamics.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DirectAppdynamics {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DirectAppdynamics.__pulumiType;
    }

    /**
     * AppDynamics Account Name.
     */
    public readonly accountName!: pulumi.Output<string>;
    /**
     * AppDynamics Client ID.
     */
    public /*out*/ readonly clientId!: pulumi.Output<string>;
    /**
     * AppDynamics Client Name.
     */
    public readonly clientName!: pulumi.Output<string>;
    /**
     * [required] | AppDynamics Client Secret.
     */
    public readonly clientSecret!: pulumi.Output<string>;
    /**
     * Optional description of the resource. Here, you can add details about who is responsible for the integration
     * (team/owner) or the purpose of creating it.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * User-friendly display name of the resource.
     */
    public readonly displayName!: pulumi.Output<string | undefined>;
    /**
     * [Replay configuration documentation](https://docs.nobl9.com/replay)
     */
    public readonly historicalDataRetrieval!: pulumi.Output<outputs.DirectAppdynamicsHistoricalDataRetrieval | undefined>;
    /**
     * [Logs documentation](https://docs.nobl9.com/features/slo-troubleshooting/event-logs)
     */
    public readonly logCollectionEnabled!: pulumi.Output<boolean | undefined>;
    /**
     * Unique name of the resource, must conform to the naming convention from [DNS
     * RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS
     * RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * [Query delay configuration documentation](https://docs.nobl9.com/features/query-delay). Computed if not provided.
     */
    public readonly queryDelay!: pulumi.Output<outputs.DirectAppdynamicsQueryDelay | undefined>;
    /**
     * Release channel of the created data source [stable/beta]
     */
    public readonly releaseChannel!: pulumi.Output<string>;
    /**
     * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used
     * anywhere; however, it's kept for backward compatibility.
     *
     * @deprecated Deprecated
     */
    public readonly sourceOfs!: pulumi.Output<string[] | undefined>;
    /**
     * The status of the created direct.
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * Base URL to the AppDynamics Controller.
     */
    public readonly url!: pulumi.Output<string>;

    /**
     * Create a DirectAppdynamics resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectAppdynamicsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectAppdynamicsArgs | DirectAppdynamicsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DirectAppdynamicsState | undefined;
            resourceInputs["accountName"] = state ? state.accountName : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["clientName"] = state ? state.clientName : undefined;
            resourceInputs["clientSecret"] = state ? state.clientSecret : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["historicalDataRetrieval"] = state ? state.historicalDataRetrieval : undefined;
            resourceInputs["logCollectionEnabled"] = state ? state.logCollectionEnabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["queryDelay"] = state ? state.queryDelay : undefined;
            resourceInputs["releaseChannel"] = state ? state.releaseChannel : undefined;
            resourceInputs["sourceOfs"] = state ? state.sourceOfs : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
        } else {
            const args = argsOrState as DirectAppdynamicsArgs | undefined;
            if ((!args || args.accountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accountName'");
            }
            if ((!args || args.clientName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientName'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            resourceInputs["accountName"] = args ? args.accountName : undefined;
            resourceInputs["clientName"] = args ? args.clientName : undefined;
            resourceInputs["clientSecret"] = args?.clientSecret ? pulumi.secret(args.clientSecret) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["historicalDataRetrieval"] = args ? args.historicalDataRetrieval : undefined;
            resourceInputs["logCollectionEnabled"] = args ? args.logCollectionEnabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["queryDelay"] = args ? args.queryDelay : undefined;
            resourceInputs["releaseChannel"] = args ? args.releaseChannel : undefined;
            resourceInputs["sourceOfs"] = args ? args.sourceOfs : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["clientSecret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DirectAppdynamics.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DirectAppdynamics resources.
 */
export interface DirectAppdynamicsState {
    /**
     * AppDynamics Account Name.
     */
    accountName?: pulumi.Input<string>;
    /**
     * AppDynamics Client ID.
     */
    clientId?: pulumi.Input<string>;
    /**
     * AppDynamics Client Name.
     */
    clientName?: pulumi.Input<string>;
    /**
     * [required] | AppDynamics Client Secret.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Optional description of the resource. Here, you can add details about who is responsible for the integration
     * (team/owner) or the purpose of creating it.
     */
    description?: pulumi.Input<string>;
    /**
     * User-friendly display name of the resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * [Replay configuration documentation](https://docs.nobl9.com/replay)
     */
    historicalDataRetrieval?: pulumi.Input<inputs.DirectAppdynamicsHistoricalDataRetrieval>;
    /**
     * [Logs documentation](https://docs.nobl9.com/features/slo-troubleshooting/event-logs)
     */
    logCollectionEnabled?: pulumi.Input<boolean>;
    /**
     * Unique name of the resource, must conform to the naming convention from [DNS
     * RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS
     * RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
     */
    project?: pulumi.Input<string>;
    /**
     * [Query delay configuration documentation](https://docs.nobl9.com/features/query-delay). Computed if not provided.
     */
    queryDelay?: pulumi.Input<inputs.DirectAppdynamicsQueryDelay>;
    /**
     * Release channel of the created data source [stable/beta]
     */
    releaseChannel?: pulumi.Input<string>;
    /**
     * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used
     * anywhere; however, it's kept for backward compatibility.
     *
     * @deprecated Deprecated
     */
    sourceOfs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The status of the created direct.
     */
    status?: pulumi.Input<string>;
    /**
     * Base URL to the AppDynamics Controller.
     */
    url?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DirectAppdynamics resource.
 */
export interface DirectAppdynamicsArgs {
    /**
     * AppDynamics Account Name.
     */
    accountName: pulumi.Input<string>;
    /**
     * AppDynamics Client Name.
     */
    clientName: pulumi.Input<string>;
    /**
     * [required] | AppDynamics Client Secret.
     */
    clientSecret?: pulumi.Input<string>;
    /**
     * Optional description of the resource. Here, you can add details about who is responsible for the integration
     * (team/owner) or the purpose of creating it.
     */
    description?: pulumi.Input<string>;
    /**
     * User-friendly display name of the resource.
     */
    displayName?: pulumi.Input<string>;
    /**
     * [Replay configuration documentation](https://docs.nobl9.com/replay)
     */
    historicalDataRetrieval?: pulumi.Input<inputs.DirectAppdynamicsHistoricalDataRetrieval>;
    /**
     * [Logs documentation](https://docs.nobl9.com/features/slo-troubleshooting/event-logs)
     */
    logCollectionEnabled?: pulumi.Input<boolean>;
    /**
     * Unique name of the resource, must conform to the naming convention from [DNS
     * RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
     */
    name?: pulumi.Input<string>;
    /**
     * Name of the Nobl9 project the resource sits in, must conform to the naming convention from [DNS
     * RFC1123](https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names).
     */
    project: pulumi.Input<string>;
    /**
     * [Query delay configuration documentation](https://docs.nobl9.com/features/query-delay). Computed if not provided.
     */
    queryDelay?: pulumi.Input<inputs.DirectAppdynamicsQueryDelay>;
    /**
     * Release channel of the created data source [stable/beta]
     */
    releaseChannel?: pulumi.Input<string>;
    /**
     * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used
     * anywhere; however, it's kept for backward compatibility.
     *
     * @deprecated Deprecated
     */
    sourceOfs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Base URL to the AppDynamics Controller.
     */
    url: pulumi.Input<string>;
}
