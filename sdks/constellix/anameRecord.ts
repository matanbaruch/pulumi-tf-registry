// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AnameRecord extends pulumi.CustomResource {
    /**
     * Get an existing AnameRecord resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AnameRecordState, opts?: pulumi.CustomResourceOptions): AnameRecord {
        return new AnameRecord(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'constellix:index/anameRecord:AnameRecord';

    /**
     * Returns true if the given object is an instance of AnameRecord.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AnameRecord {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AnameRecord.__pulumiType;
    }

    public readonly contactIds!: pulumi.Output<number[]>;
    public readonly domainId!: pulumi.Output<string>;
    public readonly geoLocation!: pulumi.Output<{[key: string]: string}>;
    public readonly gtdRegion!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly noanswer!: pulumi.Output<boolean>;
    public readonly note!: pulumi.Output<string>;
    public readonly pools!: pulumi.Output<number[]>;
    public readonly recordFailoverDisableFlag!: pulumi.Output<string>;
    public readonly recordFailoverFailoverType!: pulumi.Output<number>;
    public readonly recordFailoverValues!: pulumi.Output<outputs.AnameRecordRecordFailoverValue[] | undefined>;
    public readonly recordOption!: pulumi.Output<string>;
    public readonly roundrobins!: pulumi.Output<outputs.AnameRecordRoundrobin[] | undefined>;
    public readonly skipLookup!: pulumi.Output<boolean>;
    public readonly sourceType!: pulumi.Output<string>;
    public readonly ttl!: pulumi.Output<number>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a AnameRecord resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AnameRecordArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AnameRecordArgs | AnameRecordState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AnameRecordState | undefined;
            resourceInputs["contactIds"] = state ? state.contactIds : undefined;
            resourceInputs["domainId"] = state ? state.domainId : undefined;
            resourceInputs["geoLocation"] = state ? state.geoLocation : undefined;
            resourceInputs["gtdRegion"] = state ? state.gtdRegion : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["noanswer"] = state ? state.noanswer : undefined;
            resourceInputs["note"] = state ? state.note : undefined;
            resourceInputs["pools"] = state ? state.pools : undefined;
            resourceInputs["recordFailoverDisableFlag"] = state ? state.recordFailoverDisableFlag : undefined;
            resourceInputs["recordFailoverFailoverType"] = state ? state.recordFailoverFailoverType : undefined;
            resourceInputs["recordFailoverValues"] = state ? state.recordFailoverValues : undefined;
            resourceInputs["recordOption"] = state ? state.recordOption : undefined;
            resourceInputs["roundrobins"] = state ? state.roundrobins : undefined;
            resourceInputs["skipLookup"] = state ? state.skipLookup : undefined;
            resourceInputs["sourceType"] = state ? state.sourceType : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AnameRecordArgs | undefined;
            if ((!args || args.domainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainId'");
            }
            if ((!args || args.sourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceType'");
            }
            if ((!args || args.ttl === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ttl'");
            }
            resourceInputs["contactIds"] = args ? args.contactIds : undefined;
            resourceInputs["domainId"] = args ? args.domainId : undefined;
            resourceInputs["geoLocation"] = args ? args.geoLocation : undefined;
            resourceInputs["gtdRegion"] = args ? args.gtdRegion : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["noanswer"] = args ? args.noanswer : undefined;
            resourceInputs["note"] = args ? args.note : undefined;
            resourceInputs["pools"] = args ? args.pools : undefined;
            resourceInputs["recordFailoverDisableFlag"] = args ? args.recordFailoverDisableFlag : undefined;
            resourceInputs["recordFailoverFailoverType"] = args ? args.recordFailoverFailoverType : undefined;
            resourceInputs["recordFailoverValues"] = args ? args.recordFailoverValues : undefined;
            resourceInputs["recordOption"] = args ? args.recordOption : undefined;
            resourceInputs["roundrobins"] = args ? args.roundrobins : undefined;
            resourceInputs["skipLookup"] = args ? args.skipLookup : undefined;
            resourceInputs["sourceType"] = args ? args.sourceType : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AnameRecord.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AnameRecord resources.
 */
export interface AnameRecordState {
    contactIds?: pulumi.Input<pulumi.Input<number>[]>;
    domainId?: pulumi.Input<string>;
    geoLocation?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    gtdRegion?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    noanswer?: pulumi.Input<boolean>;
    note?: pulumi.Input<string>;
    pools?: pulumi.Input<pulumi.Input<number>[]>;
    recordFailoverDisableFlag?: pulumi.Input<string>;
    recordFailoverFailoverType?: pulumi.Input<number>;
    recordFailoverValues?: pulumi.Input<pulumi.Input<inputs.AnameRecordRecordFailoverValue>[]>;
    recordOption?: pulumi.Input<string>;
    roundrobins?: pulumi.Input<pulumi.Input<inputs.AnameRecordRoundrobin>[]>;
    skipLookup?: pulumi.Input<boolean>;
    sourceType?: pulumi.Input<string>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AnameRecord resource.
 */
export interface AnameRecordArgs {
    contactIds?: pulumi.Input<pulumi.Input<number>[]>;
    domainId: pulumi.Input<string>;
    geoLocation?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    gtdRegion?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    noanswer?: pulumi.Input<boolean>;
    note?: pulumi.Input<string>;
    pools?: pulumi.Input<pulumi.Input<number>[]>;
    recordFailoverDisableFlag?: pulumi.Input<string>;
    recordFailoverFailoverType?: pulumi.Input<number>;
    recordFailoverValues?: pulumi.Input<pulumi.Input<inputs.AnameRecordRecordFailoverValue>[]>;
    recordOption?: pulumi.Input<string>;
    roundrobins?: pulumi.Input<pulumi.Input<inputs.AnameRecordRoundrobin>[]>;
    skipLookup?: pulumi.Input<boolean>;
    sourceType: pulumi.Input<string>;
    ttl: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}
