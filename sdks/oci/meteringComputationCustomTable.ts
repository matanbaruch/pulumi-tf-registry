// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MeteringComputationCustomTable extends pulumi.CustomResource {
    /**
     * Get an existing MeteringComputationCustomTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MeteringComputationCustomTableState, opts?: pulumi.CustomResourceOptions): MeteringComputationCustomTable {
        return new MeteringComputationCustomTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/meteringComputationCustomTable:MeteringComputationCustomTable';

    /**
     * Returns true if the given object is an instance of MeteringComputationCustomTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MeteringComputationCustomTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MeteringComputationCustomTable.__pulumiType;
    }

    public readonly compartmentId!: pulumi.Output<string>;
    public readonly savedCustomTable!: pulumi.Output<outputs.MeteringComputationCustomTableSavedCustomTable>;
    public readonly savedReportId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.MeteringComputationCustomTableTimeouts | undefined>;

    /**
     * Create a MeteringComputationCustomTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MeteringComputationCustomTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MeteringComputationCustomTableArgs | MeteringComputationCustomTableState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MeteringComputationCustomTableState | undefined;
            resourceInputs["compartmentId"] = state ? state.compartmentId : undefined;
            resourceInputs["savedCustomTable"] = state ? state.savedCustomTable : undefined;
            resourceInputs["savedReportId"] = state ? state.savedReportId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as MeteringComputationCustomTableArgs | undefined;
            if ((!args || args.compartmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'compartmentId'");
            }
            if ((!args || args.savedCustomTable === undefined) && !opts.urn) {
                throw new Error("Missing required property 'savedCustomTable'");
            }
            if ((!args || args.savedReportId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'savedReportId'");
            }
            resourceInputs["compartmentId"] = args ? args.compartmentId : undefined;
            resourceInputs["savedCustomTable"] = args ? args.savedCustomTable : undefined;
            resourceInputs["savedReportId"] = args ? args.savedReportId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MeteringComputationCustomTable.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MeteringComputationCustomTable resources.
 */
export interface MeteringComputationCustomTableState {
    compartmentId?: pulumi.Input<string>;
    savedCustomTable?: pulumi.Input<inputs.MeteringComputationCustomTableSavedCustomTable>;
    savedReportId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MeteringComputationCustomTableTimeouts>;
}

/**
 * The set of arguments for constructing a MeteringComputationCustomTable resource.
 */
export interface MeteringComputationCustomTableArgs {
    compartmentId: pulumi.Input<string>;
    savedCustomTable: pulumi.Input<inputs.MeteringComputationCustomTableSavedCustomTable>;
    savedReportId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.MeteringComputationCustomTableTimeouts>;
}
