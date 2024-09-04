// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Routerospf6Area extends pulumi.CustomResource {
    /**
     * Get an existing Routerospf6Area resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Routerospf6AreaState, opts?: pulumi.CustomResourceOptions): Routerospf6Area {
        return new Routerospf6Area(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiswitch:index/routerospf6Area:Routerospf6Area';

    /**
     * Returns true if the given object is an instance of Routerospf6Area.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Routerospf6Area {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Routerospf6Area.__pulumiType;
    }

    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly filterLists!: pulumi.Output<outputs.Routerospf6AreaFilterList[] | undefined>;
    public readonly fswid!: pulumi.Output<string>;
    public readonly ranges!: pulumi.Output<outputs.Routerospf6AreaRange[] | undefined>;
    public readonly stubType!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Routerospf6Area resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Routerospf6AreaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Routerospf6AreaArgs | Routerospf6AreaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Routerospf6AreaState | undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["filterLists"] = state ? state.filterLists : undefined;
            resourceInputs["fswid"] = state ? state.fswid : undefined;
            resourceInputs["ranges"] = state ? state.ranges : undefined;
            resourceInputs["stubType"] = state ? state.stubType : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as Routerospf6AreaArgs | undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["filterLists"] = args ? args.filterLists : undefined;
            resourceInputs["fswid"] = args ? args.fswid : undefined;
            resourceInputs["ranges"] = args ? args.ranges : undefined;
            resourceInputs["stubType"] = args ? args.stubType : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Routerospf6Area.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Routerospf6Area resources.
 */
export interface Routerospf6AreaState {
    dynamicSortSubtable?: pulumi.Input<string>;
    filterLists?: pulumi.Input<pulumi.Input<inputs.Routerospf6AreaFilterList>[]>;
    fswid?: pulumi.Input<string>;
    ranges?: pulumi.Input<pulumi.Input<inputs.Routerospf6AreaRange>[]>;
    stubType?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Routerospf6Area resource.
 */
export interface Routerospf6AreaArgs {
    dynamicSortSubtable?: pulumi.Input<string>;
    filterLists?: pulumi.Input<pulumi.Input<inputs.Routerospf6AreaFilterList>[]>;
    fswid?: pulumi.Input<string>;
    ranges?: pulumi.Input<pulumi.Input<inputs.Routerospf6AreaRange>[]>;
    stubType?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
