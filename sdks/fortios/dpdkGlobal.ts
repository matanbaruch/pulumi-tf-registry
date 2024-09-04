// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DpdkGlobal extends pulumi.CustomResource {
    /**
     * Get an existing DpdkGlobal resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DpdkGlobalState, opts?: pulumi.CustomResourceOptions): DpdkGlobal {
        return new DpdkGlobal(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/dpdkGlobal:DpdkGlobal';

    /**
     * Returns true if the given object is an instance of DpdkGlobal.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DpdkGlobal {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DpdkGlobal.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly elasticbuffer!: pulumi.Output<string>;
    public readonly getAllTables!: pulumi.Output<string | undefined>;
    public readonly hugepagePercentage!: pulumi.Output<number>;
    public readonly interfaces!: pulumi.Output<outputs.DpdkGlobalInterface[] | undefined>;
    public readonly ipsecOffload!: pulumi.Output<string>;
    public readonly mbufpoolPercentage!: pulumi.Output<number>;
    public readonly multiqueue!: pulumi.Output<string>;
    public readonly perSessionAccounting!: pulumi.Output<string>;
    public readonly protects!: pulumi.Output<string>;
    public readonly sleepOnIdle!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a DpdkGlobal resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DpdkGlobalArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DpdkGlobalArgs | DpdkGlobalState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DpdkGlobalState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["elasticbuffer"] = state ? state.elasticbuffer : undefined;
            resourceInputs["getAllTables"] = state ? state.getAllTables : undefined;
            resourceInputs["hugepagePercentage"] = state ? state.hugepagePercentage : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["ipsecOffload"] = state ? state.ipsecOffload : undefined;
            resourceInputs["mbufpoolPercentage"] = state ? state.mbufpoolPercentage : undefined;
            resourceInputs["multiqueue"] = state ? state.multiqueue : undefined;
            resourceInputs["perSessionAccounting"] = state ? state.perSessionAccounting : undefined;
            resourceInputs["protects"] = state ? state.protects : undefined;
            resourceInputs["sleepOnIdle"] = state ? state.sleepOnIdle : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as DpdkGlobalArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["elasticbuffer"] = args ? args.elasticbuffer : undefined;
            resourceInputs["getAllTables"] = args ? args.getAllTables : undefined;
            resourceInputs["hugepagePercentage"] = args ? args.hugepagePercentage : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["ipsecOffload"] = args ? args.ipsecOffload : undefined;
            resourceInputs["mbufpoolPercentage"] = args ? args.mbufpoolPercentage : undefined;
            resourceInputs["multiqueue"] = args ? args.multiqueue : undefined;
            resourceInputs["perSessionAccounting"] = args ? args.perSessionAccounting : undefined;
            resourceInputs["protects"] = args ? args.protects : undefined;
            resourceInputs["sleepOnIdle"] = args ? args.sleepOnIdle : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DpdkGlobal.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DpdkGlobal resources.
 */
export interface DpdkGlobalState {
    dynamicSortSubtable?: pulumi.Input<string>;
    elasticbuffer?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    hugepagePercentage?: pulumi.Input<number>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.DpdkGlobalInterface>[]>;
    ipsecOffload?: pulumi.Input<string>;
    mbufpoolPercentage?: pulumi.Input<number>;
    multiqueue?: pulumi.Input<string>;
    perSessionAccounting?: pulumi.Input<string>;
    protects?: pulumi.Input<string>;
    sleepOnIdle?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DpdkGlobal resource.
 */
export interface DpdkGlobalArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    elasticbuffer?: pulumi.Input<string>;
    getAllTables?: pulumi.Input<string>;
    hugepagePercentage?: pulumi.Input<number>;
    interfaces?: pulumi.Input<pulumi.Input<inputs.DpdkGlobalInterface>[]>;
    ipsecOffload?: pulumi.Input<string>;
    mbufpoolPercentage?: pulumi.Input<number>;
    multiqueue?: pulumi.Input<string>;
    perSessionAccounting?: pulumi.Input<string>;
    protects?: pulumi.Input<string>;
    sleepOnIdle?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
