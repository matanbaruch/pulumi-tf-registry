// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MetricDataSource extends pulumi.CustomResource {
    /**
     * Get an existing MetricDataSource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetricDataSourceState, opts?: pulumi.CustomResourceOptions): MetricDataSource {
        return new MetricDataSource(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ilert:index/metricDataSource:MetricDataSource';

    /**
     * Returns true if the given object is an instance of MetricDataSource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetricDataSource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetricDataSource.__pulumiType;
    }

    public readonly metadata!: pulumi.Output<outputs.MetricDataSourceMetadata>;
    public readonly name!: pulumi.Output<string>;
    public readonly teams!: pulumi.Output<outputs.MetricDataSourceTeam[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.MetricDataSourceTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a MetricDataSource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetricDataSourceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetricDataSourceArgs | MetricDataSourceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetricDataSourceState | undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["teams"] = state ? state.teams : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as MetricDataSourceArgs | undefined;
            if ((!args || args.metadata === undefined) && !opts.urn) {
                throw new Error("Missing required property 'metadata'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["teams"] = args ? args.teams : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MetricDataSource.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MetricDataSource resources.
 */
export interface MetricDataSourceState {
    metadata?: pulumi.Input<inputs.MetricDataSourceMetadata>;
    name?: pulumi.Input<string>;
    teams?: pulumi.Input<pulumi.Input<inputs.MetricDataSourceTeam>[]>;
    timeouts?: pulumi.Input<inputs.MetricDataSourceTimeouts>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MetricDataSource resource.
 */
export interface MetricDataSourceArgs {
    metadata: pulumi.Input<inputs.MetricDataSourceMetadata>;
    name?: pulumi.Input<string>;
    teams?: pulumi.Input<pulumi.Input<inputs.MetricDataSourceTeam>[]>;
    timeouts?: pulumi.Input<inputs.MetricDataSourceTimeouts>;
    type: pulumi.Input<string>;
}
