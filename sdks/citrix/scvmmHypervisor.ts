// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ScvmmHypervisor extends pulumi.CustomResource {
    /**
     * Get an existing ScvmmHypervisor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScvmmHypervisorState, opts?: pulumi.CustomResourceOptions): ScvmmHypervisor {
        return new ScvmmHypervisor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrix:index/scvmmHypervisor:ScvmmHypervisor';

    /**
     * Returns true if the given object is an instance of ScvmmHypervisor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScvmmHypervisor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScvmmHypervisor.__pulumiType;
    }

    /**
     * Hypervisor address(es). At least one is required.
     */
    public readonly addresses!: pulumi.Output<string[]>;
    /**
     * Maximum number of actions that can execute in parallel on the hypervisor. Default is 50.
     */
    public readonly maxAbsoluteActiveActions!: pulumi.Output<number>;
    /**
     * Maximum number of actions that can be started on the hypervisor per-minute. Default is 10.
     */
    public readonly maxAbsoluteNewActionsPerMinute!: pulumi.Output<number>;
    /**
     * Maximum percentage of machines on the hypervisor which can have their power state changed simultaneously. Default is 10.
     */
    public readonly maxPowerActionsPercentageOfMachines!: pulumi.Output<number>;
    /**
     * Name of the hypervisor.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Password of the hypervisor.
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * Password format of the hypervisor. Choose between Base64 and PlainText.
     */
    public readonly passwordFormat!: pulumi.Output<string>;
    /**
     * The IDs of the scopes for the hypervisor to be a part of.
     */
    public readonly scopes!: pulumi.Output<string[]>;
    /**
     * Username of the hypervisor.
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * Id of the zone the hypervisor is associated with.
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a ScvmmHypervisor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScvmmHypervisorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScvmmHypervisorArgs | ScvmmHypervisorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScvmmHypervisorState | undefined;
            resourceInputs["addresses"] = state ? state.addresses : undefined;
            resourceInputs["maxAbsoluteActiveActions"] = state ? state.maxAbsoluteActiveActions : undefined;
            resourceInputs["maxAbsoluteNewActionsPerMinute"] = state ? state.maxAbsoluteNewActionsPerMinute : undefined;
            resourceInputs["maxPowerActionsPercentageOfMachines"] = state ? state.maxPowerActionsPercentageOfMachines : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["passwordFormat"] = state ? state.passwordFormat : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as ScvmmHypervisorArgs | undefined;
            if ((!args || args.addresses === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addresses'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.passwordFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'passwordFormat'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            if ((!args || args.zone === undefined) && !opts.urn) {
                throw new Error("Missing required property 'zone'");
            }
            resourceInputs["addresses"] = args ? args.addresses : undefined;
            resourceInputs["maxAbsoluteActiveActions"] = args ? args.maxAbsoluteActiveActions : undefined;
            resourceInputs["maxAbsoluteNewActionsPerMinute"] = args ? args.maxAbsoluteNewActionsPerMinute : undefined;
            resourceInputs["maxPowerActionsPercentageOfMachines"] = args ? args.maxPowerActionsPercentageOfMachines : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["passwordFormat"] = args ? args.passwordFormat : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ScvmmHypervisor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ScvmmHypervisor resources.
 */
export interface ScvmmHypervisorState {
    /**
     * Hypervisor address(es). At least one is required.
     */
    addresses?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum number of actions that can execute in parallel on the hypervisor. Default is 50.
     */
    maxAbsoluteActiveActions?: pulumi.Input<number>;
    /**
     * Maximum number of actions that can be started on the hypervisor per-minute. Default is 10.
     */
    maxAbsoluteNewActionsPerMinute?: pulumi.Input<number>;
    /**
     * Maximum percentage of machines on the hypervisor which can have their power state changed simultaneously. Default is 10.
     */
    maxPowerActionsPercentageOfMachines?: pulumi.Input<number>;
    /**
     * Name of the hypervisor.
     */
    name?: pulumi.Input<string>;
    /**
     * Password of the hypervisor.
     */
    password?: pulumi.Input<string>;
    /**
     * Password format of the hypervisor. Choose between Base64 and PlainText.
     */
    passwordFormat?: pulumi.Input<string>;
    /**
     * The IDs of the scopes for the hypervisor to be a part of.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username of the hypervisor.
     */
    username?: pulumi.Input<string>;
    /**
     * Id of the zone the hypervisor is associated with.
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ScvmmHypervisor resource.
 */
export interface ScvmmHypervisorArgs {
    /**
     * Hypervisor address(es). At least one is required.
     */
    addresses: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Maximum number of actions that can execute in parallel on the hypervisor. Default is 50.
     */
    maxAbsoluteActiveActions?: pulumi.Input<number>;
    /**
     * Maximum number of actions that can be started on the hypervisor per-minute. Default is 10.
     */
    maxAbsoluteNewActionsPerMinute?: pulumi.Input<number>;
    /**
     * Maximum percentage of machines on the hypervisor which can have their power state changed simultaneously. Default is 10.
     */
    maxPowerActionsPercentageOfMachines?: pulumi.Input<number>;
    /**
     * Name of the hypervisor.
     */
    name?: pulumi.Input<string>;
    /**
     * Password of the hypervisor.
     */
    password: pulumi.Input<string>;
    /**
     * Password format of the hypervisor. Choose between Base64 and PlainText.
     */
    passwordFormat: pulumi.Input<string>;
    /**
     * The IDs of the scopes for the hypervisor to be a part of.
     */
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Username of the hypervisor.
     */
    username: pulumi.Input<string>;
    /**
     * Id of the zone the hypervisor is associated with.
     */
    zone: pulumi.Input<string>;
}
