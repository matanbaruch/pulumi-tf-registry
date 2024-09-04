// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DefaultRouteTable extends pulumi.CustomResource {
    /**
     * Get an existing DefaultRouteTable resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DefaultRouteTableState, opts?: pulumi.CustomResourceOptions): DefaultRouteTable {
        return new DefaultRouteTable(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/defaultRouteTable:DefaultRouteTable';

    /**
     * Returns true if the given object is an instance of DefaultRouteTable.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DefaultRouteTable {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DefaultRouteTable.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly defaultRouteTableId!: pulumi.Output<string>;
    public /*out*/ readonly ownerId!: pulumi.Output<string>;
    public readonly propagatingVgws!: pulumi.Output<string[] | undefined>;
    public readonly routes!: pulumi.Output<outputs.DefaultRouteTableRoute[]>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.DefaultRouteTableTimeouts | undefined>;
    public /*out*/ readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a DefaultRouteTable resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DefaultRouteTableArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DefaultRouteTableArgs | DefaultRouteTableState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DefaultRouteTableState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["defaultRouteTableId"] = state ? state.defaultRouteTableId : undefined;
            resourceInputs["ownerId"] = state ? state.ownerId : undefined;
            resourceInputs["propagatingVgws"] = state ? state.propagatingVgws : undefined;
            resourceInputs["routes"] = state ? state.routes : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as DefaultRouteTableArgs | undefined;
            if ((!args || args.defaultRouteTableId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'defaultRouteTableId'");
            }
            resourceInputs["defaultRouteTableId"] = args ? args.defaultRouteTableId : undefined;
            resourceInputs["propagatingVgws"] = args ? args.propagatingVgws : undefined;
            resourceInputs["routes"] = args ? args.routes : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["ownerId"] = undefined /*out*/;
            resourceInputs["vpcId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DefaultRouteTable.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DefaultRouteTable resources.
 */
export interface DefaultRouteTableState {
    arn?: pulumi.Input<string>;
    defaultRouteTableId?: pulumi.Input<string>;
    ownerId?: pulumi.Input<string>;
    propagatingVgws?: pulumi.Input<pulumi.Input<string>[]>;
    routes?: pulumi.Input<pulumi.Input<inputs.DefaultRouteTableRoute>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DefaultRouteTableTimeouts>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DefaultRouteTable resource.
 */
export interface DefaultRouteTableArgs {
    defaultRouteTableId: pulumi.Input<string>;
    propagatingVgws?: pulumi.Input<pulumi.Input<string>[]>;
    routes?: pulumi.Input<pulumi.Input<inputs.DefaultRouteTableRoute>[]>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DefaultRouteTableTimeouts>;
}
