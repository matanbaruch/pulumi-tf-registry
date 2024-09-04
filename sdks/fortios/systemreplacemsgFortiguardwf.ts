// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemreplacemsgFortiguardwf extends pulumi.CustomResource {
    /**
     * Get an existing SystemreplacemsgFortiguardwf resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemreplacemsgFortiguardwfState, opts?: pulumi.CustomResourceOptions): SystemreplacemsgFortiguardwf {
        return new SystemreplacemsgFortiguardwf(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/systemreplacemsgFortiguardwf:SystemreplacemsgFortiguardwf';

    /**
     * Returns true if the given object is an instance of SystemreplacemsgFortiguardwf.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemreplacemsgFortiguardwf {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemreplacemsgFortiguardwf.__pulumiType;
    }

    public readonly buffer!: pulumi.Output<string | undefined>;
    public readonly format!: pulumi.Output<string>;
    public readonly header!: pulumi.Output<string>;
    public readonly msgType!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a SystemreplacemsgFortiguardwf resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemreplacemsgFortiguardwfArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemreplacemsgFortiguardwfArgs | SystemreplacemsgFortiguardwfState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemreplacemsgFortiguardwfState | undefined;
            resourceInputs["buffer"] = state ? state.buffer : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["header"] = state ? state.header : undefined;
            resourceInputs["msgType"] = state ? state.msgType : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as SystemreplacemsgFortiguardwfArgs | undefined;
            if ((!args || args.msgType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgType'");
            }
            resourceInputs["buffer"] = args ? args.buffer : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["header"] = args ? args.header : undefined;
            resourceInputs["msgType"] = args ? args.msgType : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemreplacemsgFortiguardwf.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemreplacemsgFortiguardwf resources.
 */
export interface SystemreplacemsgFortiguardwfState {
    buffer?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    header?: pulumi.Input<string>;
    msgType?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemreplacemsgFortiguardwf resource.
 */
export interface SystemreplacemsgFortiguardwfArgs {
    buffer?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    header?: pulumi.Input<string>;
    msgType: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
