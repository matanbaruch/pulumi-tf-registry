// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GslbIpList extends pulumi.CustomResource {
    /**
     * Get an existing GslbIpList resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GslbIpListState, opts?: pulumi.CustomResourceOptions): GslbIpList {
        return new GslbIpList(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/gslbIpList:GslbIpList';

    /**
     * Returns true if the given object is an instance of GslbIpList.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GslbIpList {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GslbIpList.__pulumiType;
    }

    public readonly gslbIpListAddrLists!: pulumi.Output<outputs.GslbIpListGslbIpListAddrList[] | undefined>;
    /**
     * Load IP List file (IP List filename)
     */
    public readonly gslbIpListFilename!: pulumi.Output<string | undefined>;
    /**
     * Specify IP List name
     */
    public readonly gslbIpListObjName!: pulumi.Output<string>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a GslbIpList resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GslbIpListArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GslbIpListArgs | GslbIpListState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GslbIpListState | undefined;
            resourceInputs["gslbIpListAddrLists"] = state ? state.gslbIpListAddrLists : undefined;
            resourceInputs["gslbIpListFilename"] = state ? state.gslbIpListFilename : undefined;
            resourceInputs["gslbIpListObjName"] = state ? state.gslbIpListObjName : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as GslbIpListArgs | undefined;
            if ((!args || args.gslbIpListObjName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gslbIpListObjName'");
            }
            resourceInputs["gslbIpListAddrLists"] = args ? args.gslbIpListAddrLists : undefined;
            resourceInputs["gslbIpListFilename"] = args ? args.gslbIpListFilename : undefined;
            resourceInputs["gslbIpListObjName"] = args ? args.gslbIpListObjName : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GslbIpList.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GslbIpList resources.
 */
export interface GslbIpListState {
    gslbIpListAddrLists?: pulumi.Input<pulumi.Input<inputs.GslbIpListGslbIpListAddrList>[]>;
    /**
     * Load IP List file (IP List filename)
     */
    gslbIpListFilename?: pulumi.Input<string>;
    /**
     * Specify IP List name
     */
    gslbIpListObjName?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GslbIpList resource.
 */
export interface GslbIpListArgs {
    gslbIpListAddrLists?: pulumi.Input<pulumi.Input<inputs.GslbIpListGslbIpListAddrList>[]>;
    /**
     * Load IP List file (IP List filename)
     */
    gslbIpListFilename?: pulumi.Input<string>;
    /**
     * Specify IP List name
     */
    gslbIpListObjName: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
