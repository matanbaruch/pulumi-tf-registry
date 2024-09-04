// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DirectDatadog extends pulumi.CustomResource {
    /**
     * Get an existing DirectDatadog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DirectDatadogState, opts?: pulumi.CustomResourceOptions): DirectDatadog {
        return new DirectDatadog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nobl9:index/directDatadog:DirectDatadog';

    /**
     * Returns true if the given object is an instance of DirectDatadog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DirectDatadog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DirectDatadog.__pulumiType;
    }

    /**
     * [required] | Datadog API Key.
     */
    public readonly apiKey!: pulumi.Output<string>;
    /**
     * [required] | Datadog Application Key.
     */
    public readonly applicationKey!: pulumi.Output<string>;
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
    public readonly historicalDataRetrieval!: pulumi.Output<outputs.DirectDatadogHistoricalDataRetrieval | undefined>;
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
    public readonly queryDelay!: pulumi.Output<outputs.DirectDatadogQueryDelay | undefined>;
    /**
     * Release channel of the created data source [stable/beta]
     */
    public readonly releaseChannel!: pulumi.Output<string>;
    /**
     * `com` or `eu`, Datadog SaaS instance, which corresponds to one of Datadog's two locations (https://www.datadoghq.com/ in
     * the U.S. or https://datadoghq.eu/ in the European Union).
     */
    public readonly site!: pulumi.Output<string>;
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
     * Create a DirectDatadog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DirectDatadogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DirectDatadogArgs | DirectDatadogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DirectDatadogState | undefined;
            resourceInputs["apiKey"] = state ? state.apiKey : undefined;
            resourceInputs["applicationKey"] = state ? state.applicationKey : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["historicalDataRetrieval"] = state ? state.historicalDataRetrieval : undefined;
            resourceInputs["logCollectionEnabled"] = state ? state.logCollectionEnabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["queryDelay"] = state ? state.queryDelay : undefined;
            resourceInputs["releaseChannel"] = state ? state.releaseChannel : undefined;
            resourceInputs["site"] = state ? state.site : undefined;
            resourceInputs["sourceOfs"] = state ? state.sourceOfs : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as DirectDatadogArgs | undefined;
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.site === undefined) && !opts.urn) {
                throw new Error("Missing required property 'site'");
            }
            resourceInputs["apiKey"] = args?.apiKey ? pulumi.secret(args.apiKey) : undefined;
            resourceInputs["applicationKey"] = args?.applicationKey ? pulumi.secret(args.applicationKey) : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["historicalDataRetrieval"] = args ? args.historicalDataRetrieval : undefined;
            resourceInputs["logCollectionEnabled"] = args ? args.logCollectionEnabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["queryDelay"] = args ? args.queryDelay : undefined;
            resourceInputs["releaseChannel"] = args ? args.releaseChannel : undefined;
            resourceInputs["site"] = args ? args.site : undefined;
            resourceInputs["sourceOfs"] = args ? args.sourceOfs : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["apiKey", "applicationKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(DirectDatadog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DirectDatadog resources.
 */
export interface DirectDatadogState {
    /**
     * [required] | Datadog API Key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * [required] | Datadog Application Key.
     */
    applicationKey?: pulumi.Input<string>;
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
    historicalDataRetrieval?: pulumi.Input<inputs.DirectDatadogHistoricalDataRetrieval>;
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
    queryDelay?: pulumi.Input<inputs.DirectDatadogQueryDelay>;
    /**
     * Release channel of the created data source [stable/beta]
     */
    releaseChannel?: pulumi.Input<string>;
    /**
     * `com` or `eu`, Datadog SaaS instance, which corresponds to one of Datadog's two locations (https://www.datadoghq.com/ in
     * the U.S. or https://datadoghq.eu/ in the European Union).
     */
    site?: pulumi.Input<string>;
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
}

/**
 * The set of arguments for constructing a DirectDatadog resource.
 */
export interface DirectDatadogArgs {
    /**
     * [required] | Datadog API Key.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * [required] | Datadog Application Key.
     */
    applicationKey?: pulumi.Input<string>;
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
    historicalDataRetrieval?: pulumi.Input<inputs.DirectDatadogHistoricalDataRetrieval>;
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
    queryDelay?: pulumi.Input<inputs.DirectDatadogQueryDelay>;
    /**
     * Release channel of the created data source [stable/beta]
     */
    releaseChannel?: pulumi.Input<string>;
    /**
     * `com` or `eu`, Datadog SaaS instance, which corresponds to one of Datadog's two locations (https://www.datadoghq.com/ in
     * the U.S. or https://datadoghq.eu/ in the European Union).
     */
    site: pulumi.Input<string>;
    /**
     * This value indicated whether the field was a source of metrics and/or services. 'source_of' is deprecated and not used
     * anywhere; however, it's kept for backward compatibility.
     *
     * @deprecated Deprecated
     */
    sourceOfs?: pulumi.Input<pulumi.Input<string>[]>;
}
