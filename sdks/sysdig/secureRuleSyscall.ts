// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SecureRuleSyscall extends pulumi.CustomResource {
    /**
     * Get an existing SecureRuleSyscall resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecureRuleSyscallState, opts?: pulumi.CustomResourceOptions): SecureRuleSyscall {
        return new SecureRuleSyscall(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sysdig:index/secureRuleSyscall:SecureRuleSyscall';

    /**
     * Returns true if the given object is an instance of SecureRuleSyscall.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SecureRuleSyscall {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SecureRuleSyscall.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly matching!: pulumi.Output<boolean | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly syscalls!: pulumi.Output<string[] | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.SecureRuleSyscallTimeouts | undefined>;
    public /*out*/ readonly version!: pulumi.Output<number>;

    /**
     * Create a SecureRuleSyscall resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecureRuleSyscallArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecureRuleSyscallArgs | SecureRuleSyscallState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecureRuleSyscallState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["matching"] = state ? state.matching : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["syscalls"] = state ? state.syscalls : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as SecureRuleSyscallArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["matching"] = args ? args.matching : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["syscalls"] = args ? args.syscalls : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SecureRuleSyscall.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SecureRuleSyscall resources.
 */
export interface SecureRuleSyscallState {
    description?: pulumi.Input<string>;
    matching?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    syscalls?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.SecureRuleSyscallTimeouts>;
    version?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a SecureRuleSyscall resource.
 */
export interface SecureRuleSyscallArgs {
    description?: pulumi.Input<string>;
    matching?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    syscalls?: pulumi.Input<pulumi.Input<string>[]>;
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.SecureRuleSyscallTimeouts>;
}
