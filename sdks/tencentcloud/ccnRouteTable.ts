// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CcnRouteTable extends pulumi.CustomResource {
    /**
     * Get an existing CcnRouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CcnRouteTableState, opts?: pulumi.CustomResourceOptions): CcnRouteTable {
        return new CcnRouteTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/ccnRouteTable:CcnRouteTable';

    /**
     * Returns true if the given object is an instance of CcnRouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CcnRouteTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CcnRouteTable.__pulumiType;
    }

    /**
     * CCN Instance ID.
     */
    public readonly ccnId!: pulumi.Output<string>;
    /**
     * create time.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Description of CCN Route table.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * True: default routing table False: non default routing table.
     */
    public /*out*/ readonly isDefaultTable!: pulumi.Output<boolean>;
    /**
     * CCN Route table name.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a CcnRouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CcnRouteTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CcnRouteTableArgs | CcnRouteTableState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CcnRouteTableState | undefined;
            resourceInputs["ccnId"] = state ? state.ccnId : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["isDefaultTable"] = state ? state.isDefaultTable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as CcnRouteTableArgs | undefined;
            if ((!args || args.ccnId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ccnId'");
            }
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["ccnId"] = args ? args.ccnId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["isDefaultTable"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CcnRouteTable.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CcnRouteTable resources.
 */
export interface CcnRouteTableState {
    /**
     * CCN Instance ID.
     */
    ccnId?: pulumi.Input<string>;
    /**
     * create time.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Description of CCN Route table.
     */
    description?: pulumi.Input<string>;
    /**
     * True: default routing table False: non default routing table.
     */
    isDefaultTable?: pulumi.Input<boolean>;
    /**
     * CCN Route table name.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CcnRouteTable resource.
 */
export interface CcnRouteTableArgs {
    /**
     * CCN Instance ID.
     */
    ccnId: pulumi.Input<string>;
    /**
     * Description of CCN Route table.
     */
    description: pulumi.Input<string>;
    /**
     * CCN Route table name.
     */
    name?: pulumi.Input<string>;
}
