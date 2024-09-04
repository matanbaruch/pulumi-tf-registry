// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RouterBgpVrf6 extends pulumi.CustomResource {
    /**
     * Get an existing RouterBgpVrf6 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RouterBgpVrf6State, opts?: pulumi.CustomResourceOptions): RouterBgpVrf6 {
        return new RouterBgpVrf6(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/routerBgpVrf6:RouterBgpVrf6';

    /**
     * Returns true if the given object is an instance of RouterBgpVrf6.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RouterBgpVrf6 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RouterBgpVrf6.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly exportRts!: pulumi.Output<string[]>;
    public readonly importRouteMaps!: pulumi.Output<string[]>;
    public readonly importRts!: pulumi.Output<string[]>;
    public readonly leakTargets!: pulumi.Output<outputs.RouterBgpVrf6LeakTarget[] | undefined>;
    public readonly rd!: pulumi.Output<string | undefined>;
    public readonly role!: pulumi.Output<string>;
    public readonly vrf!: pulumi.Output<string | undefined>;

    /**
     * Create a RouterBgpVrf6 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RouterBgpVrf6Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RouterBgpVrf6Args | RouterBgpVrf6State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RouterBgpVrf6State | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["exportRts"] = state ? state.exportRts : undefined;
            resourceInputs["importRouteMaps"] = state ? state.importRouteMaps : undefined;
            resourceInputs["importRts"] = state ? state.importRts : undefined;
            resourceInputs["leakTargets"] = state ? state.leakTargets : undefined;
            resourceInputs["rd"] = state ? state.rd : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["vrf"] = state ? state.vrf : undefined;
        } else {
            const args = argsOrState as RouterBgpVrf6Args | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["exportRts"] = args ? args.exportRts : undefined;
            resourceInputs["importRouteMaps"] = args ? args.importRouteMaps : undefined;
            resourceInputs["importRts"] = args ? args.importRts : undefined;
            resourceInputs["leakTargets"] = args ? args.leakTargets : undefined;
            resourceInputs["rd"] = args ? args.rd : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["vrf"] = args ? args.vrf : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RouterBgpVrf6.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RouterBgpVrf6 resources.
 */
export interface RouterBgpVrf6State {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exportRts?: pulumi.Input<pulumi.Input<string>[]>;
    importRouteMaps?: pulumi.Input<pulumi.Input<string>[]>;
    importRts?: pulumi.Input<pulumi.Input<string>[]>;
    leakTargets?: pulumi.Input<pulumi.Input<inputs.RouterBgpVrf6LeakTarget>[]>;
    rd?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    vrf?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RouterBgpVrf6 resource.
 */
export interface RouterBgpVrf6Args {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    exportRts?: pulumi.Input<pulumi.Input<string>[]>;
    importRouteMaps?: pulumi.Input<pulumi.Input<string>[]>;
    importRts?: pulumi.Input<pulumi.Input<string>[]>;
    leakTargets?: pulumi.Input<pulumi.Input<inputs.RouterBgpVrf6LeakTarget>[]>;
    rd?: pulumi.Input<string>;
    role?: pulumi.Input<string>;
    vrf?: pulumi.Input<string>;
}
