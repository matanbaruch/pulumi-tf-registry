// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SwitchcontrollerautoconfigDefault extends pulumi.CustomResource {
    /**
     * Get an existing SwitchcontrollerautoconfigDefault resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SwitchcontrollerautoconfigDefaultState, opts?: pulumi.CustomResourceOptions): SwitchcontrollerautoconfigDefault {
        return new SwitchcontrollerautoconfigDefault(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/switchcontrollerautoconfigDefault:SwitchcontrollerautoconfigDefault';

    /**
     * Returns true if the given object is an instance of SwitchcontrollerautoconfigDefault.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SwitchcontrollerautoconfigDefault {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SwitchcontrollerautoconfigDefault.__pulumiType;
    }

    public readonly fgtPolicy!: pulumi.Output<string>;
    public readonly iclPolicy!: pulumi.Output<string>;
    public readonly islPolicy!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SwitchcontrollerautoconfigDefault resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SwitchcontrollerautoconfigDefaultArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SwitchcontrollerautoconfigDefaultArgs | SwitchcontrollerautoconfigDefaultState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SwitchcontrollerautoconfigDefaultState | undefined;
            resourceInputs["fgtPolicy"] = state ? state.fgtPolicy : undefined;
            resourceInputs["iclPolicy"] = state ? state.iclPolicy : undefined;
            resourceInputs["islPolicy"] = state ? state.islPolicy : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SwitchcontrollerautoconfigDefaultArgs | undefined;
            resourceInputs["fgtPolicy"] = args ? args.fgtPolicy : undefined;
            resourceInputs["iclPolicy"] = args ? args.iclPolicy : undefined;
            resourceInputs["islPolicy"] = args ? args.islPolicy : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SwitchcontrollerautoconfigDefault.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SwitchcontrollerautoconfigDefault resources.
 */
export interface SwitchcontrollerautoconfigDefaultState {
    fgtPolicy?: pulumi.Input<string>;
    iclPolicy?: pulumi.Input<string>;
    islPolicy?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SwitchcontrollerautoconfigDefault resource.
 */
export interface SwitchcontrollerautoconfigDefaultArgs {
    fgtPolicy?: pulumi.Input<string>;
    iclPolicy?: pulumi.Input<string>;
    islPolicy?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
