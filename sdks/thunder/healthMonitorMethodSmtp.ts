// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class HealthMonitorMethodSmtp extends pulumi.CustomResource {
    /**
     * Get an existing HealthMonitorMethodSmtp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: HealthMonitorMethodSmtpState, opts?: pulumi.CustomResourceOptions): HealthMonitorMethodSmtp {
        return new HealthMonitorMethodSmtp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/healthMonitorMethodSmtp:HealthMonitorMethodSmtp';

    /**
     * Returns true if the given object is an instance of HealthMonitorMethodSmtp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is HealthMonitorMethodSmtp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === HealthMonitorMethodSmtp.__pulumiType;
    }

    /**
     * Specify SMTP Sender
     */
    public readonly mailFrom!: pulumi.Output<string | undefined>;
    /**
     * Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Specify SMTP Receiver
     */
    public readonly rcptTo!: pulumi.Output<string | undefined>;
    /**
     * SMTP type
     */
    public readonly smtp!: pulumi.Output<number | undefined>;
    /**
     * Specify domain name of 'helo' command
     */
    public readonly smtpDomain!: pulumi.Output<string | undefined>;
    /**
     * Specify SMTP port, default is 25 (Port Number (default 25))
     */
    public readonly smtpPort!: pulumi.Output<number | undefined>;
    /**
     * Check the STARTTLS support at helo response
     */
    public readonly smtpStarttls!: pulumi.Output<number | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a HealthMonitorMethodSmtp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: HealthMonitorMethodSmtpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: HealthMonitorMethodSmtpArgs | HealthMonitorMethodSmtpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as HealthMonitorMethodSmtpState | undefined;
            resourceInputs["mailFrom"] = state ? state.mailFrom : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rcptTo"] = state ? state.rcptTo : undefined;
            resourceInputs["smtp"] = state ? state.smtp : undefined;
            resourceInputs["smtpDomain"] = state ? state.smtpDomain : undefined;
            resourceInputs["smtpPort"] = state ? state.smtpPort : undefined;
            resourceInputs["smtpStarttls"] = state ? state.smtpStarttls : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as HealthMonitorMethodSmtpArgs | undefined;
            resourceInputs["mailFrom"] = args ? args.mailFrom : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rcptTo"] = args ? args.rcptTo : undefined;
            resourceInputs["smtp"] = args ? args.smtp : undefined;
            resourceInputs["smtpDomain"] = args ? args.smtpDomain : undefined;
            resourceInputs["smtpPort"] = args ? args.smtpPort : undefined;
            resourceInputs["smtpStarttls"] = args ? args.smtpStarttls : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(HealthMonitorMethodSmtp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering HealthMonitorMethodSmtp resources.
 */
export interface HealthMonitorMethodSmtpState {
    /**
     * Specify SMTP Sender
     */
    mailFrom?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Specify SMTP Receiver
     */
    rcptTo?: pulumi.Input<string>;
    /**
     * SMTP type
     */
    smtp?: pulumi.Input<number>;
    /**
     * Specify domain name of 'helo' command
     */
    smtpDomain?: pulumi.Input<string>;
    /**
     * Specify SMTP port, default is 25 (Port Number (default 25))
     */
    smtpPort?: pulumi.Input<number>;
    /**
     * Check the STARTTLS support at helo response
     */
    smtpStarttls?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a HealthMonitorMethodSmtp resource.
 */
export interface HealthMonitorMethodSmtpArgs {
    /**
     * Specify SMTP Sender
     */
    mailFrom?: pulumi.Input<string>;
    /**
     * Name
     */
    name?: pulumi.Input<string>;
    /**
     * Specify SMTP Receiver
     */
    rcptTo?: pulumi.Input<string>;
    /**
     * SMTP type
     */
    smtp?: pulumi.Input<number>;
    /**
     * Specify domain name of 'helo' command
     */
    smtpDomain?: pulumi.Input<string>;
    /**
     * Specify SMTP port, default is 25 (Port Number (default 25))
     */
    smtpPort?: pulumi.Input<number>;
    /**
     * Check the STARTTLS support at helo response
     */
    smtpStarttls?: pulumi.Input<number>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
