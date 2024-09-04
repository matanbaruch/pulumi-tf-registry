// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class BigqueryBiReservation extends pulumi.CustomResource {
    /**
     * Get an existing BigqueryBiReservation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BigqueryBiReservationState, opts?: pulumi.CustomResourceOptions): BigqueryBiReservation {
        return new BigqueryBiReservation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/bigqueryBiReservation:BigqueryBiReservation';

    /**
     * Returns true if the given object is an instance of BigqueryBiReservation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BigqueryBiReservation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BigqueryBiReservation.__pulumiType;
    }

    /**
     * LOCATION_DESCRIPTION
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name of the singleton BI reservation. Reservation names have the form
     * 'projects/{projectId}/locations/{locationId}/biReservation'.
     */
    public /*out*/ readonly name!: pulumi.Output<string>;
    /**
     * Preferred tables to use BI capacity for.
     */
    public readonly preferredTables!: pulumi.Output<outputs.BigqueryBiReservationPreferredTable[] | undefined>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Size of a reservation, in bytes.
     */
    public readonly size!: pulumi.Output<number | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.BigqueryBiReservationTimeouts | undefined>;
    /**
     * The last update timestamp of a reservation. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
     * to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a BigqueryBiReservation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BigqueryBiReservationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BigqueryBiReservationArgs | BigqueryBiReservationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BigqueryBiReservationState | undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["preferredTables"] = state ? state.preferredTables : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["size"] = state ? state.size : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as BigqueryBiReservationArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["preferredTables"] = args ? args.preferredTables : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["size"] = args ? args.size : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BigqueryBiReservation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering BigqueryBiReservation resources.
 */
export interface BigqueryBiReservationState {
    /**
     * LOCATION_DESCRIPTION
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the singleton BI reservation. Reservation names have the form
     * 'projects/{projectId}/locations/{locationId}/biReservation'.
     */
    name?: pulumi.Input<string>;
    /**
     * Preferred tables to use BI capacity for.
     */
    preferredTables?: pulumi.Input<pulumi.Input<inputs.BigqueryBiReservationPreferredTable>[]>;
    project?: pulumi.Input<string>;
    /**
     * Size of a reservation, in bytes.
     */
    size?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.BigqueryBiReservationTimeouts>;
    /**
     * The last update timestamp of a reservation. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up
     * to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
     */
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a BigqueryBiReservation resource.
 */
export interface BigqueryBiReservationArgs {
    /**
     * LOCATION_DESCRIPTION
     */
    location: pulumi.Input<string>;
    /**
     * Preferred tables to use BI capacity for.
     */
    preferredTables?: pulumi.Input<pulumi.Input<inputs.BigqueryBiReservationPreferredTable>[]>;
    project?: pulumi.Input<string>;
    /**
     * Size of a reservation, in bytes.
     */
    size?: pulumi.Input<number>;
    timeouts?: pulumi.Input<inputs.BigqueryBiReservationTimeouts>;
}
