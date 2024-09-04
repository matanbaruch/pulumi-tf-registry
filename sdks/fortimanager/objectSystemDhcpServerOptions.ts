// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectSystemDhcpServerOptions extends pulumi.CustomResource {
    /**
     * Get an existing ObjectSystemDhcpServerOptions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectSystemDhcpServerOptionsState, opts?: pulumi.CustomResourceOptions): ObjectSystemDhcpServerOptions {
        return new ObjectSystemDhcpServerOptions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectSystemDhcpServerOptions:ObjectSystemDhcpServerOptions';

    /**
     * Returns true if the given object is an instance of ObjectSystemDhcpServerOptions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectSystemDhcpServerOptions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectSystemDhcpServerOptions.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly code!: pulumi.Output<number | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly ips!: pulumi.Output<string[]>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly server!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly uciMatch!: pulumi.Output<string>;
    public readonly uciStrings!: pulumi.Output<string[]>;
    public readonly value!: pulumi.Output<string | undefined>;
    public readonly vciMatch!: pulumi.Output<string>;
    public readonly vciStrings!: pulumi.Output<string[]>;

    /**
     * Create a ObjectSystemDhcpServerOptions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectSystemDhcpServerOptionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectSystemDhcpServerOptionsArgs | ObjectSystemDhcpServerOptionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectSystemDhcpServerOptionsState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["code"] = state ? state.code : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["ips"] = state ? state.ips : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["uciMatch"] = state ? state.uciMatch : undefined;
            resourceInputs["uciStrings"] = state ? state.uciStrings : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
            resourceInputs["vciMatch"] = state ? state.vciMatch : undefined;
            resourceInputs["vciStrings"] = state ? state.vciStrings : undefined;
        } else {
            const args = argsOrState as ObjectSystemDhcpServerOptionsArgs | undefined;
            if ((!args || args.server === undefined) && !opts.urn) {
                throw new Error("Missing required property 'server'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["code"] = args ? args.code : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["ips"] = args ? args.ips : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["uciMatch"] = args ? args.uciMatch : undefined;
            resourceInputs["uciStrings"] = args ? args.uciStrings : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["vciMatch"] = args ? args.vciMatch : undefined;
            resourceInputs["vciStrings"] = args ? args.vciStrings : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectSystemDhcpServerOptions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectSystemDhcpServerOptions resources.
 */
export interface ObjectSystemDhcpServerOptionsState {
    adom?: pulumi.Input<string>;
    code?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    uciMatch?: pulumi.Input<string>;
    uciStrings?: pulumi.Input<pulumi.Input<string>[]>;
    value?: pulumi.Input<string>;
    vciMatch?: pulumi.Input<string>;
    vciStrings?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectSystemDhcpServerOptions resource.
 */
export interface ObjectSystemDhcpServerOptionsArgs {
    adom?: pulumi.Input<string>;
    code?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    ips?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
    server: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    uciMatch?: pulumi.Input<string>;
    uciStrings?: pulumi.Input<pulumi.Input<string>[]>;
    value?: pulumi.Input<string>;
    vciMatch?: pulumi.Input<string>;
    vciStrings?: pulumi.Input<pulumi.Input<string>[]>;
}
