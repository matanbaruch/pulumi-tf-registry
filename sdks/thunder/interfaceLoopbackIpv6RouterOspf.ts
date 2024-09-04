// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class InterfaceLoopbackIpv6RouterOspf extends pulumi.CustomResource {
    /**
     * Get an existing InterfaceLoopbackIpv6RouterOspf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: InterfaceLoopbackIpv6RouterOspfState, opts?: pulumi.CustomResourceOptions): InterfaceLoopbackIpv6RouterOspf {
        return new InterfaceLoopbackIpv6RouterOspf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/interfaceLoopbackIpv6RouterOspf:InterfaceLoopbackIpv6RouterOspf';

    /**
     * Returns true if the given object is an instance of InterfaceLoopbackIpv6RouterOspf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is InterfaceLoopbackIpv6RouterOspf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === InterfaceLoopbackIpv6RouterOspf.__pulumiType;
    }

    public readonly areaLists!: pulumi.Output<outputs.InterfaceLoopbackIpv6RouterOspfAreaList[] | undefined>;
    /**
     * Ifnum
     */
    public readonly ifnum!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a InterfaceLoopbackIpv6RouterOspf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: InterfaceLoopbackIpv6RouterOspfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: InterfaceLoopbackIpv6RouterOspfArgs | InterfaceLoopbackIpv6RouterOspfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as InterfaceLoopbackIpv6RouterOspfState | undefined;
            resourceInputs["areaLists"] = state ? state.areaLists : undefined;
            resourceInputs["ifnum"] = state ? state.ifnum : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as InterfaceLoopbackIpv6RouterOspfArgs | undefined;
            if ((!args || args.ifnum === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ifnum'");
            }
            resourceInputs["areaLists"] = args ? args.areaLists : undefined;
            resourceInputs["ifnum"] = args ? args.ifnum : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(InterfaceLoopbackIpv6RouterOspf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering InterfaceLoopbackIpv6RouterOspf resources.
 */
export interface InterfaceLoopbackIpv6RouterOspfState {
    areaLists?: pulumi.Input<pulumi.Input<inputs.InterfaceLoopbackIpv6RouterOspfAreaList>[]>;
    /**
     * Ifnum
     */
    ifnum?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a InterfaceLoopbackIpv6RouterOspf resource.
 */
export interface InterfaceLoopbackIpv6RouterOspfArgs {
    areaLists?: pulumi.Input<pulumi.Input<inputs.InterfaceLoopbackIpv6RouterOspfAreaList>[]>;
    /**
     * Ifnum
     */
    ifnum: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
